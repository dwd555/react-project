import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
class Router extends Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/login" component={Login} />
					<Redirect from='/' to='/home' />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default Router;