import React, {Component} from 'react'
import NewItem  from '../../components/NewsItem'
import './news-list.less'
import Loading from '../../components/loading'
import {getNewsList} from '../../api/index.js'
import * as Actions from '../../actions/index.js'
import { getLatest,getHistory,setStartLoad} from '../../actions'
import {debounce,throttle} from'../../util/index.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import moment from 'moment'


class NewsList extends  Component {
	constructor(props){
		super(props);
		this.handleScrollEvent=debounce(this.handleScroll.bind(this),100);
	}

	componentDidMount(){
		if(this.props.newsLists.length<=0){
		// this.props.actions.getLatest();
			this.props.getLatest()
	    }else{
	    	// window.document.body.scrollTop||window.document.documentElement.scrollTop =NewsList.scrollPoint
	    	window.document.body.scrollTop=NewsList.scrollPoint;
	    }

		window.addEventListener('scroll',this.handleScrollEvent)

	}
	handleScroll (){
		//可视区域高度
		const viewHeight= Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		//滚动高度
		const scrollTop   = window.document.body.scrollTop||window.document.documentElement.scrollTop;
		//页面实际高度
		const scrollHeight= Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
        const { prevDate } = this.props

        NewsList.scrollPoint = scrollTop;//全局

		if( viewHeight + scrollTop + 150 >scrollHeight){
            this.props.setStartLoad();
			this.props.getHistory(prevDate.curDate);
			// this.props.actions.getHistory(prevDate.curDate);
		}
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.handleScrollEvent);
		// sessionStorage.setItem('scrollPoint',NewsList.scrollPoint)
	}
	render(){
		const { newsLists,prevDate} = this.props;
		// console.log(this.props);
		return(
			<div className='news-list'  >
			    <ul>
				{  
					newsLists.map((item,index) =>{ 
	                    return (
	                    	<NewItem key={item.id}  item={item} />
	                    ) 	
					})	
			    }
			    </ul>
			    <Loading show={prevDate.loading} title='加载中...' />
			</div>
		)
	}
}



const mapStateToProps = (state) => {
	return {
		newsLists:state.newsLists,
		prevDate:state.prevDate,
		newswiper:state.newswiper
	}

}
//它的功能是，将 action 作为 props 绑定到 组件 上。两种不同写法
// const mapDispatchToProps = (dispatch ) => {
// 	return {
// 		actions: bindActionCreators(Actions, dispatch)
// 	}
// }
const mapDispatchToProps =(dispatch) =>{
	return {
		getLatest:() =>{ 
           dispatch(getLatest())
		},
		setStartLoad:() =>{
		   dispatch(setStartLoad())
		},
		getHistory:(date)=>{
		   dispatch(getHistory(date))
		}
	}	
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsList)