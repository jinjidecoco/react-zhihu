import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import './app.css'
import About from './components/About'
import Recond from './components/Recond'
import Home from './containers/Home'
import Detail from './components/Detail'



class App extends Component{
	render(){
		return(
			<div className='app'>
		    {/*<Switch> 路由中只有一条将渲染*/}
			    <Router>
				  <Switch>
				    <Route exact path='/' component={Home}/> 
				    <Route path='/home' component={Home}/>
				    <Route path="/about" component={About} />
	                <Route path="/recond" component={Recond} />
	                <Route path="/detail/:id" component={Detail} />
				  </Switch> 
				</Router>  
			</div>
		)
	}
}
export default App