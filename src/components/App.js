import React, { Component } from 'react';
import '../style/App.css';
import ProductDisplay from '../containers/productDisplay';
import ProductInfo from './productInfo';

class App extends Component {
  render() {
    return (
      <body>
          <header className="App-header">
            <h1 className="App-title">React-Redux Product Select App</h1>
          </header>
          <main>
            <div className="row">
              <div className="col-md-5">
                <ProductDisplay />
              </div>
              <div className="col-md-7">
                <ProductInfo />
              </div>
            </div>
          </main>
          <footer>
            <h3>By Christian Liu</h3>
          </footer>
      </body>
    );
  }
}

export default App;
