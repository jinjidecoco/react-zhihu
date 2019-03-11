import React, { Component } from "react";
import "./nav.less";

import { Route, NavLink } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <ul className="list">
          <li>
            <NavLink to="/home" exact activeStyle={{ color: "green" }}>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/recond" exact activeStyle={{ color: "green" }}>
              推荐
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "green" }}>
              关于
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNav;
