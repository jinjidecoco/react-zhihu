import  React,{Component} from 'react'
import './detail.less'
import {getNewsDetail} from '../../api/index.js'
import BottomBar from '../BottomBar'

class Deatil extends  Component{
	constructor(props){
		super(props)
		this.state={
			retData:''
		}
	}
	componentDidMount(){
        const id = this.props.match.params.id;
		getNewsDetail(id).then(res=>{
			if(res.status==200){
				console.log(res);
				this.setState({
					retData:res.data
				})
			}
		})
	}
	render(){
		const {retData}=this.state
		return(
			<div className='detail'>
			  <div className='top-title' style={{backgroundImage:`url(${retData.image}) `,backgroundPosition:'center',height:'240px', backgroundSize:'cover'}}>
			      <p className='title'>{retData.title}</p>	
			  </div>
              <div dangerouslySetInnerHTML={{ __html: retData.body}}></div>
              <BottomBar/>
			</div>
		)
	}

}
export default Deatil