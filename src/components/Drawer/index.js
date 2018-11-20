import React, {Component} from 'react'
import './drawer.less'


class Drawer extends Component {
	constructor(props){
    	super(props)
	}
	render(){
        const otherClass = this.props.show==true?'show':'';
        const showBlock  = this.props.show==true?{display:'block'}:{display:'none'}
		const classStyle='drawer'+' '+ otherClass;
		return(
			<div className='container'>
			    <div className={classStyle}>
	       			<div className='user'>
            			<img src="" alt=""/>
            			<span className='name'>用户名:coco</span>
	       			</div>
	       			<div className='setting'>
		       			<span>
			       			<i className='icon iconfont icon-shoucang'></i>
			       			<p className='text'>收藏</p>
		       			</span>
		       			<span>
			       			<i className='icon iconfont icon-xiaoxi'></i>
			       			<p className='text'>消息</p>
		       			</span>
		       			<span>
		       				<i className='icon iconfont icon-shezhi'></i>
		       			    <p className='text'>设置</p>
		       			</span>
	       			</div>
	       			<div className='bottom'>
	       			  <span><i className='iconfont icon-lixianxiazai'></i>离线</span>
	       			  <span><i className='iconfont icon-yejianzhuanhuan'></i>夜间</span>
	       			</div>
       			</div>
       	    </div>
		)
	}
}
export default Drawer