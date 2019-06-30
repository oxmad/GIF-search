import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Loader from './components/loader';
import { connect } from 'react-redux';

class App extends Component {
  // Инпут
  onInputChange = value => {
    const { changeSearchText, changeError } = this.props;

    changeSearchText(value);
    changeError(null);
  }

  // Поиск гифки
  searchGIF = e => {
    const { saveImages, toggleLoader, changeError } = this.props;
    const { searchText } = this.props.app;
    const apiKey = 'SccsoCNcduBUF6EiYr9iHKfb90UuRRbQ&limit=150';

    e.preventDefault();

    toggleLoader(true);
    changeError(null);

    if (searchText.trim() !== '') {
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${apiKey}`)
      .then(res => {
        const links = res.data.data.map((item) => {
          return {
            id: item.id,
            url: item.images.downsized.url,
          };
        });

        saveImages(links);
        
        this.setNewImage();
        toggleLoader(false);
      })
      .catch(() => {
        toggleLoader(false);
        console.log('Упс! Проблема с запросом, попробуй другое слово :(');
      });
    } else {
      toggleLoader(false);
      changeError('Введите слово');
    }
  }

  setNewImage() {
    const { changeImage, toggleLoader } = this.props;
    const { links, watched } = this.props.app;

    toggleLoader(true);

    const image = this.checkDuplicate(links, watched);

    changeImage(image);
    toggleLoader(false);
  }

  // TODO
  // Проверяем на дубликаты и заменяем на непросмотренные
  checkDuplicate = (imagesArray, arrayOfWatchedImages) => {
    const { changeWatched } = this.props;
    const maxCount = 149;
    const randomNum = this.getRandomNumber(0, maxCount);
    // console.log('num', randomNum);
    const image = imagesArray.find((item, index) => {
      const { id } = item;

      if (!arrayOfWatchedImages.includes(id)) {
        const newArray = [...arrayOfWatchedImages, id];
        changeWatched(newArray);
      }

      return index === randomNum && !arrayOfWatchedImages.includes(id);
    });

    return image.url;

    // if (!image) {
    //   // console.log('Got deplicate!', arrayOfWatchedImages);
    //   if (maxCount < arrayOfWatchedImages.length) {
    //     // console.log('recursion', maxCount <= arrayOfWatchedImages.length, maxCount, arrayOfWatchedImages.length)
    //     this.setNewImage();
    //     // this.checkDuplicate(imagesArray, arrayOfWatchedImages);
    //   } else if (maxCount === arrayOfWatchedImages.length) {
    //     changeWatched([]);
    //     this.setNewImage();
    //   } else {
    //     this.setNewImage();
    //     // console.log('wops!');
    //   }
    // } else {
    //    return image.url;
    // }
  }

  // Получаем рандомное число
  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  render() {
    const { links, image, error, loading } = this.props.app;

    // const buttonType = links.length ? 'button' : 'submit';
    
    return (
      <div className="App">
        <header className="App-header">
          <form className="form" onSubmit={this.searchGIF}>
            <h1 className="title">Найди свою гифку!</h1>
            <div className="search-result">
              {loading ? <Loader /> : null}
              {links.length && !loading ? <img src={image} alt=""/> : null}
            </div>
            <div className="search-bar">
              <input type="text" onChange={e => this.onInputChange(e.target.value)} />
              {/* <button type={buttonType} onClick={() => links.length ? this.setNewImage() : null}>{links.length ? 'Ещё!' : 'Найти!'}</button> */}
              <button type="submit">{links.length ? 'Ещё!' : 'Найти!'}</button>
            </div>
            {error ? <p className="error">{error}</p> : null}
          </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    toggleLoader: bool => dispatch({ type: 'TOGGLE_LOADER', payload: bool }),
    saveImages: array => dispatch({ type: 'CHANGE_LINKS', payload: array }),
    changeSearchText: text => dispatch({ type: 'CHANGE_INPUT', payload: text }),
    changeImage: img => dispatch({ type: 'CHANGE_IMAGE', payload: img}),
    changeError: text => dispatch({ type: 'CHANGE_ERROR', payload: text }),
    changeWatched: array => dispatch({ type: 'CHANGE_WATCHED', payload: array }),
  }),
)(App);
