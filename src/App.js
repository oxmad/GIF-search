import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    searchText: '',
    links: [],
    btnText: 'Найти!',
    image: null,
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

    const phrase = this.state.searchText;

    if (phrase.trim() !== '') {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=SccsoCNcduBUF6EiYr9iHKfb90UuRRbQ&limit=25`,
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
          links,
          btnText: 'Ещё!'
        });
        
        this.generateImage();
      });
    } else {
      this.setState({ err: 'Введите слово' })
    }
  }

  // Генерируем результат
  generateImage = () => {
    const { links } = this.state;

    const randomNum = Math.floor(Math.random() * (24 - 0)) + 0;
    
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
    const { links, btnText, image, err: error } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <form className="form" onSubmit={ this.searchGIF }>
            <h1 className="title">Найди свою гифку!</h1>
            <div className="search-result">
              { links.length !== 0 ? <img src={image} alt=""/> : null }
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