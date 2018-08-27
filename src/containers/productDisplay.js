import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductChoose from './productChoose';

class productDisplay extends Component {
  render() {

    return (
      <main>
        <div className="row">
          <div className="col-md-5">
            <img className="img img-fluid" src={process.env.PUBLIC_URL + this.props.select.productURL} alt={this.props.select.name} />
            <ProductChoose />
          </div>
          <div className="col-md-7">
            <div id="productInfo">
              <h2>{this.props.select.name}</h2>
              <p>From a young age Bob the cat had always wanted to be a premium cat.  For many of his formative years, Bob was unable to obtain the schooling necessary to be qualified as a premium cat.  Fortunately, thanks to the efforts of DangLamin International, Bob is now premium using our 5 step qualification program.</p>
              <span id="priceInfo">${this.props.select.price}</span>
            </div>
            <btn className="btn btn-primary">BUY NOW</btn>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    select: state.select
  };
}

export default connect(mapStateToProps)(productDisplay);