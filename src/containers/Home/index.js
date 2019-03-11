import React, { Component } from "react";
import "./home.less";
import NewsList from "../NewsList";
import Drawer from "../../components/Drawer";
import { connect } from "react-redux";
import { Button } from "antd-mobile";
import { List, NavBar, Icon } from "antd-mobile";
import * as Actions from "../../actions/index.js";
import { bindActionCreators } from "redux";
import { Carousel } from "antd-mobile";

// import Header from '../Header'
// import TopNav from '../Nav'

class Home extends Component {
  constructor(props) {
    super(props);
    this.handelBackground = this.handelBackground.bind(this);
    this.state = {
      bgStyle: {},
      headTitle: [{ title: "", point: 180 }]
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handelBackground);
  }
  handelBackground(event) {
    const scrollTop =
      window.document.body.scrollTop ||
      window.document.documentElement.scrollTop;
    // const scrollHeight = event.target.scrollHeight;
    // console.log(scrollTop);

    if (scrollTop > 180) {
      this.setState({
        bgStyle: { backgroundColor: "#10a5da" }
      });
      this.changeTitle(scrollTop);
    } else {
      this.setState({
        bgStyle: {}
      });
    }
  }
  changeTitle(point) {
    // const headDate =this.props.prevDate;
    // const {headTitle} = this.state;
    // // console.log(headTitle);
    // headTitle.push({title:headDate,point:point})
    // console.log(headTitle.title);
    // this.setState({
    //           headTitle:headTitle.push({title:headDate,point:point})
    // })
    // for (var i=0;i < headTitle.length;i++){
    // }
  }
  showSide() {
    this.props.actions.setBgShow();
  }
  handleHide() {
    this.props.actions.setBgHide();
  }
  componentWillUnmout() {
    window.removeEventListener("scroll", this.handelBackground);
  }
  render() {
    const { newswiper, bgDisplay } = this.props;
    const headDate = this.props.prevDate;
    console.log(headDate);
    const showBlock =
      this.props.bgDisplay.show == true
        ? { display: "block" }
        : { display: "none" };
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return (
      <div className="home">
        <div
          className="blocking"
          style={showBlock}
          onClick={this.handleHide.bind(this)}
        />
        <Drawer show={bgDisplay.show} />
        <div className="header" style={this.state.bgStyle}>
          <span className="menu" onClick={this.showSide.bind(this)}>
            <i className="icon iconfont icon-menu" />
          </span>
          {headDate.curDate}
        </div>

        <div className="swiper" style={{ height: "180px" }}>
          <Carousel {...setting} style={{ height: "180px" }}>
            {newswiper.map((val, id) => {
              const bgImage = val.image;
              return (
                <div
                  className="bcg"
                  key={id}
                  style={{
                    height: "180px",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "100% 100%",
                    backgroundColor: "#ccc"
                  }}
                >
                  <p className="title"> {val.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
        <NewsList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newswiper: state.newswiper,
    bgDisplay: state.bgDisplay,
    prevDate: state.prevDate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
