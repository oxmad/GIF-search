import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    searchText: '',
    links: [],
    btnText: 'Найти!',
    image: null,
    loading: false,
    err: null
  }

  // Инпут
  onInputChange = (e) => {
    const value = e.target.value;
    
    this.setState({
      err: null,
      searchText: value,
      btnText: 'Найти!'
    });
  }

  // Поиск гифки
  searchGIF = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const phrase = this.state.searchText;

    if (phrase.trim() !== '') {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=SccsoCNcduBUF6EiYr9iHKfb90UuRRbQ&limit=150`,
      {
        method: "GET"
      })
      .then(response => response.json())
      .then((data) => {
        let links = [];

        data.data.map((item) => {
          links.push(item.images.downsized.url);

          return false;
        });

        this.setState({
          loading: false, 
          links,
          btnText: 'Ещё!'
        });
        
        this.generateImage();
      });
    } else {
      this.setState({ 
        loading: false, 
        err: 'Введите слово' })
    }
  }

  // Генерируем результат
  generateImage = () => {
    const { links } = this.state;
    
    const randomNum = Math.floor(Math.random() * (149 - 0)) + 0;
    
    links.map((image, index) => {
      if (index === randomNum) {
        this.setState({
          image: image
        });
      };
      
      return false;
    });
  }

  render() {
    const { links, btnText, image, err: error, loading } = this.state;

    const preloader = (
      <div className="lds-css ng-scope">
        <div className="lds-ellipsis">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="App">
        <header className="App-header">
          <form className="form" onSubmit={ this.searchGIF }>
            <h1 className="title">Найди свою гифку!</h1>
            <div className="search-result">
              { loading ? preloader : null }
              { links.length !== 0 && loading === false ? <img src={image} alt=""/> : null }
            </div>
            <div className="search-bar">
              <input type="text" onChange={this.onInputChange}/>
              <button type="submit">{ btnText }</button>
            </div>
            { error !== null ? <p className="error">{error}</p> : null }
          </form>
        </header>
      </div>
    );
  }
}