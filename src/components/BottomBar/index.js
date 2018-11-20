import React,{Component} from 'react'
import './bottom-bar.less'

class BottomBar extends Component{
	render(){
		return(
			<div className='bottom-bar'>
			   <ul className='handle-list'>
			   	<li onClick={()=>{window.history.back()}}><span><i className='iconfont icon-fanhui'></i></span></li>
			   	<li><span><i className='iconfont icon-xiayige'></i></span></li>
			   	<li><span><i className='iconfont icon-up'></i></span></li>
			   	<li><span><i className='iconfont icon-zhuanfa'></i></span></li>
			   	<li><span><i className='iconfont icon-pinglun'></i></span></li>
			   </ul>
			</div>
		)
	}
}
export default BottomBar