import React, { Component } from 'react';
import './App.css';
const searchUrl = "https://www.google.com/search?q="
class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      word: ""
    }
  }


  handleChange = event => {
    this.setState({ word: event.target.value });
  };

  render() {

    const url = searchUrl + this.state.word
    return (
        <div className="App">
          <header className="App-header">
            <h1>Hakukone</h1>
            <input
              type="search"
              onChange={this.handleChange}
            />
            <form action={url} method="get">
              <a href={this.state.word.length < 1 ? false : url} >Hae</a>
            </form>
          </header>
        </div>
    );
  }
}

export default App;
