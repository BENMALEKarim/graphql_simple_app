import React, { Component } from 'react';

import BookList from './components/BookList'


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1> Karim </h1>
        <BookList />
      </div>
    );
  }

}

export default App;