import React, { Component } from "react";
import "./detail.less";
import { getNewsDetail, getExtraData } from "../../api/index.js";
import BottomBar from "../BottomBar";

class Deatil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retData: "",
      extraData: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(this);
    getNewsDetail(id).then(res => {
      if (res.status === 200) {
        this.setState({
          retData: res.data
        });
      }
    });
    getExtraData(id).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.setState({
          extraData: res.data
        });
      }
    });
  }
  componentWillUnmount() {}
  render() {
    const { retData, extraData } = this.state;
    return (
      <div className="detail">
        <div
          className="top-title"
          style={{
            backgroundImage: `url(${retData.image}) `,
            backgroundPosition: "center",
            height: "240px",
            backgroundSize: "cover"
          }}
        >
          <p className="title">{retData.title}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: retData.body }} />
        <BottomBar data={extraData} />
      </div>
    );
  }
}
export default Deatil;
