import React, { Component } from 'react';
import ProductChoose from './productChoose';
import { connect } from 'react-redux';
import GREEN from '../images/green.jpg';
import PINK from '../images/pink.jpg';
import NORMAL from '../images/normal.jpg';

class productDisplay extends Component {
  renderImage() {
    switch (this.props.color.color) {
      case "normal":
        return <img src={NORMAL} className="img img-fluid" />
      case "pink":
       return  <img src={PINK} className="img img-fluid" />
      case "green":
        return <img src={GREEN} className="img img-fluid" />
    }
  }
  render() {

    return (
      <div>
        {this.renderImage()}
        <ProductChoose />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.color
  };
}

export default connect(mapStateToProps)(productDisplay);