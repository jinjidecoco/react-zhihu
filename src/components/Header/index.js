import React, { Component } from "react";
import "./header.less";
import { Carousel, WingBlank } from "antd-mobile";
import { Button } from "antd-mobile";
class Header extends Component {
  add() {
    alert(1);
  }
  render() {
    return (
      <div className="header">
        <Button>Start</Button>
        <span
          onClick={() => {
            this.add();
          }}
        >
          知乎日报
        </span>
      </div>
    );
  }
}
export default Header;
