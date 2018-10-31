import React,{Component} from 'react'
import './home.less'
import NewsList from '../NewsList'
// import Header from '../Header'
// import TopNav from '../Nav'


class Home extends Component{
	render(){
		return(
			<div className='home'>
			   {/*<Header/>*/}
			   {/*<TopNav/>*/}
			   <p className='title'>知乎日报</p>
			   {/*<NewsList/>*/}
			   <NewsList/>
			</div>
		)
	}
}
export default Home