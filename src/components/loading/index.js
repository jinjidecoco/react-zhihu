import React,{Component} from 'react'
import './loading.less'
import  loadingImg from './loading.gif'


class Loading extends Component {
	constructor(props){
		super(props)
	}
	render(){
        // console.log(this.props);
		let loadingStyle =this.props.show == true?{ display: ''}:{ display:'none'}
		return(
			<div className='loading-container' style={loadingStyle}>
			   <div className='loading-wrapper'>
			   		<img src={loadingImg} witdh='32px' height='32px' alt="加载"/>
			   		<div className='loading-title'>{this.props.title}</div>
			   </div>
			</div>
		)

    }
}
export default  Loading