import React,{Component} from 'react'
import './bottom-bar.less'

class BottomBar extends Component{
	constructor(props){
		super(props)
		this.state={
			like:false
		}
	}
	next(){
		alert(1);
	}
	like(){
		this.setState({
			like:!this.state.like
		})
	}
	render(){
		var {data}=this.props;
		var giveLike =this.state.like?{color:'#3bb4f2'}:{color :''}
		// console.log(data);
		return(
			<div className='bottom-bar'>
			   <ul className='handle-list'>
			   	<li onClick={()=>{window.history.back()}}><span><i className='iconfont icon-fanhui'></i></span></li>
			   	<li onClick ={this.next.bind(this)}><span><i className='iconfont icon-xiayige'></i></span></li>
			   	<li className='zan' onClick={()=>{this.like()}}>
			   	    <p className='zan-count'>{data.popularity}</p>
			     	<span style={giveLike}><i className='iconfont icon-up'></i></span>
			   	</li>
			   	<li><span><i className='iconfont icon-zhuanfa'></i></span></li>
			   	<li className='comment'>
			   	    <p className='comment-count'>{data.comments}</p>
			   		<span><i className='iconfont icon-pinglun'></i></span>
			   	</li>
			   </ul>
			</div>
		)
	}
}
export default BottomBar