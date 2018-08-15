import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/index';

import GREEN from '../images/green.jpg';
import PINK from '../images/pink.jpg';
import NORMAL from '../images/normal.jpg';

class productChoose extends Component {

  // renderColorList(imageData) {
  //   const pic = imageData.pic;

  //   return <li
  //     className="img img-fluid chooseColor"
  //     onClick={() => this.onColorClick(value)}>
  //     <img src={pic} />
  //   </li>
  //}
  onColorClick(color) {
    this.props.getColor(color);
  }

  render() {
    return (
        <ul id="chooseList">
          {/* {this.props.color.map(this.renderColorList)}*/}
          <li
            className="img img-fluid chooseColor"
            onClick={() => this.onColorClick("normal")}>
            <img src={NORMAL} /></li>
            <li
            className="img img-fluid chooseColor"
            onClick={() => this.onColorClick("pink")}>
            <img src={PINK} /></li>
            <li
            className="img img-fluid chooseColor"
            onClick={() => this.onColorClick("green")}>
            <img src={GREEN} /></li>
        </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    color: state.color
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators({ getColor }, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(productChoose);