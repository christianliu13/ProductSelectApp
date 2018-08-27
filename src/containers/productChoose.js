import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productSelect from '../actions/index';

import GREEN from '../images/green.jpg';
import PINK from '../images/pink.jpg';
import NORMAL from '../images/normal.jpg';

class productChoose extends Component {

  render() {
    return (
      <ul id="chooseList">
        <li
          className="img img-fluid chooseColor"
          onClick={() => this.props.productSelect(this.props.products.products.normal, this.props.products.products.normal.color, this.props.products.products.normal.price, this.props.products.products.normal.name)}>
          <img src={NORMAL}
            alt="Normal" /></li>
        <li
          className="img img-fluid chooseColor"
          onClick={() => this.props.productSelect(this.props.products.products.green, this.props.products.products.green.color, this.props.products.products.green.price, this.props.products.products.green.name)}>
          <img src={GREEN}
            alt="Green" /></li>
        <li
          className="img img-fluid chooseColor"
          onClick={() => this.props.productSelect(this.props.products.products.pink, this.props.products.products.pink.color, this.props.products.products.pink.price, this.props.products.products.pink.name)}>
          <img src={PINK}
            alt="Pink" /></li>
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators({ productSelect: productSelect }, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(productChoose);