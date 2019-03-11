import React, { Component } from "react";
import "./recond.less";
class Recond extends Component {
  render() {
    return <div className="recond">推荐{this.props.url}</div>;
  }
}
export default Recond;
