import React, {Component} from 'react'
import NewItem  from '../../components/NewsItem'
import {getNewsList} from '../../api/index.js'
import * as Actions from '../../actions/index.js'
import { getLatest,getHistory} from '../../actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import moment from 'moment'


class NewsList extends  Component {
	constructor(props){
		super(props);
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount(){
		// this.props.actions.getLatest();
		this.props.getLatest()
		window.addEventListener('scroll',this.handleScroll,false)
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.handleScroll)
	}
	handleScroll (){
		const offsetHeight=window.document.body.offsetHeight;
		const scrollTop =window.document.body.scrollTop;
		const scrollHeight =window.document.body.scrollHeight;

		if( offsetHeight+scrollTop + 100 >scrollHeight){
			const date=this.props.newsLists.date;
			// const prev = moment(date).subtract(1,'day').format('YYYYMMDD')
			console.log(date);
			this.props.getHistory(date);
			// this.props.actions.getHistory('20181017')
		}
	}
	render(){
		const { newsLists } =this.props;
		// console.log(this.props);
		return(
			<div className='news-list'>
			    <p>{this.props.newsLists.date}</p>
			    <ul>
				{  
					newsLists.stories.map((item,index) =>{ 
	                    return  <NewItem key={item.id}  item={item} />
					})	
					
			    }
			    </ul>
			</div>
		)
	}
}

//
const mapStateToProps = (state) => {
	return {
		newsLists:state.newsLists
	}

}


//它的功能是，将 action 作为 props 绑定到 组件 上。
// const mapDispatchToProps = (dispatch ) => {
// 	return {
// 		actions: bindActionCreators(Actions, dispatch)
// 	}
// }
//两种不同写法
const mapDispatchToProps =(dispatch) =>{
	return {
		getLatest:() =>{ 
			// console.log(dispatch);
           dispatch(getLatest())
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