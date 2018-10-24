import React, { Component }  from 'react'
import './about.less'

class About extends  Component{

	render(){
		console.log(this.props)
		return(
			<div className='about'>
			  关于{this.props.match.url}
			</div>
		)
	}

}
export default About