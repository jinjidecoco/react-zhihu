import React,{Component} from 'react'
import './home.less'
import NewsList from '../NewsList'
import Drawer from '../../components/Drawer'
import {connect} from 'react-redux'
import { Button } from 'antd-mobile';
import { List, NavBar, Icon } from 'antd-mobile';
import * as Actions from '../../actions/index.js'
import { bindActionCreators } from 'redux'
import { Carousel} from 'antd-mobile';

// import Header from '../Header'
// import TopNav from '../Nav'

class Home extends Component{
	constructor(props){
		super(props);
		this.handelBackground=this.handelBackground.bind(this);
		this.state={
			bgStyle:{}
		}


	}
	componentDidMount(){
		window.addEventListener('scroll',this.handelBackground)
	}
	handelBackground(){
		const scrollTop   = window.document.body.scrollTop||window.document.documentElement.scrollTop;
		if(scrollTop>180){
			this.setState({
				bgStyle:{backgroundColor:'#2094bd'}
			})
		}else{
			this.setState({
				bgStyle:{}
			})
		}
	}
	showSide(){
		this.props.actions.setBgShow();
	}
	handleHide(){
		this.props.actions.setBgHide();
	}
	componentWillUnmout(){
		window.removeEventListener('scroll',this.handelBackground)
	}
	render(){
		const {newswiper}= this.props
		const {bgDisplay} =this.props
		const showBlock  = this.props.bgDisplay.show==true?{display:'block'}:{display:'none'}
		const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
		return(
			<div className='home' >
			   	<div className='blocking' style={showBlock} onClick={this.handleHide.bind(this)}>
       			</div>
       			<Drawer show={bgDisplay.show} />
			    <div className="header" style={this.state.bgStyle}>
			        <span className='menu' onClick={this.showSide.bind(this)}><i className='icon iconfont icon-menu'></i></span>今日新闻
			    </div>

                <div className="swiper" style={{height:'180px'}}>
				    <Carousel  {...setting}  style={{height:'180px'}} >
				      	{
	                        newswiper.map((val,id) =>{
	                        	const bgImage=val.image;
	                        	return(
	                        		<div className='bcg' key={id} style={{height:'180px',backgroundImage:`url(${bgImage})` ,
	                        		      backgroundSize:'100% 100%', backgroundColor:"#ccc"}} >
				                		<p className='title'> {val.title}</p>
			                    	</div>
			                    )
	                        })
			                
		              	}  
	                </Carousel>
                </div>
			   <NewsList />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		newswiper: state.newswiper,
		bgDisplay: state.bgDisplay
	}

}
const mapDispatchToProps = (dispatch ) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)