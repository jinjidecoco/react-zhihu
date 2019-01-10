import React, {Component} from 'react'
import NewItem  from '../NewsItem'
import {getNewsList} from '../../api/index.js'

class NewsList extends   Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		getNewsList().then(res  =>{
			if(res && res.status===200){
				if(res.data.stories){
					this.setState({ 
						newsLists:res.data.stories,
						date: res.data.date
					})
			    }
			}
		})
	}
	render(){
		const {newsLists} =this.state;
		return(
			<div className='news-list'>
				{   
					newsLists.map((item,index)=>{ 
	                    return  <NewsItem key={item.id} item={item} />
					})
			    }
			</div>
		)
	}
}
export default NewsList