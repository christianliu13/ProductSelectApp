import React, { Component } from 'react';
import '../style/App.css';
import ProductDisplay from '../containers/productDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">React-Redux Product Select App</h1>
        </header>
        <ProductDisplay />
        <footer>
          <h3>By Christian Liu</h3>
        </footer>
      </div>
    );
  }
}

export default App;
