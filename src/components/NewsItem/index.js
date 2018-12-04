import React,{Component} from 'react'
import './new-item.less'
import { Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types'



class NewsItem extends Component {
	render(){
	    const {item,id} =this.props;
		return(
			// <div>
				<div className='new-item' index={id}>	
				    <Link to={`/detail/${item.id}`}>
					    <span>{item.title}</span>
						<img src= {item.images}  alt=""/>
				    </Link>
				</div>
			// </div>
		)
	}
}
// NewsItem.PropTypes = {
// 	item:PropTypes.object.isRequired
// }
 export default NewsItem
