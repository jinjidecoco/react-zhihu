import React,{Component} from 'react'
import './new-item.less'
import { Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types'



class NewsItem extends Component {
	render(){
		const eachItem =this.props.item;
		// console.log(this.props);
		// const {id}=this.props;
		// return(
			// items.map((item,index) =>{
				return(
					<div className='new-item'  >	
					    <Link to={`/detail/${eachItem.id}`}>
						    <span>{eachItem.title}</span>
							<img src= {eachItem.images}  alt=""/>
					    </Link>
					</div>
				)
			// })	
		// )			
	}
}
// NewsItem.PropTypes = {
// 	item:PropTypes.object.isRequired
// }
 export default NewsItem
