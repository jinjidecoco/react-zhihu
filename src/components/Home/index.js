import React,{Component} from 'react'
import './home.less'
import NewsList from '../NewsList'
import Header from '../Header'
import TopNav from '../Nav'


class Home extends Component{
	render(){
		return(
			<div className='home'>
			   <Header/>
			   <TopNav/>
			   <span className='title'></span>
			   <NewsList/>
			</div>
		)
	}
}
export default Home