import React,{Component} from 'react'
import './bottom-bar.less'

class BottomBar extends Component{
	render(){
		return(
			<div className='bottom-bar'>
			   <ul className='handle-list'>
			   	<li>返回</li>
			   	<li>下一个</li>
			   	<li>👍</li>
			   	<li>转发</li>
			   	<li>评论</li>
			   </ul>
			</div>
		)
	}
}
export default BottomBar