import React, { Component }  from 'react'
import './header.less'
class Header extends  Component{
	add(){
		alert(1);
	}
	render(){
		return(
			<div className='header'>
			  <span onClick={()=>{this.add()}}>知乎日报</span>
			</div>
		)
	}

}
export default Header