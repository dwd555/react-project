import React, { Component } from 'react';
import { Layout, Menu, Icon,Row, Col } from 'antd';
import Todo from './Todo.js';
import Second from './Second';
import {Route,Switch,Link,Redirect} from 'react-router-dom';
const { Header, Content, Footer, Sider} = Layout;
class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			defaultKey:["1"]
		}
	}
	componentWillMount(){
		console.log(this.props.location.pathname)
		switch(this.props.location.pathname){
			case "/home/todo":
				this.setState({
					defaultKey:["1"]
				})
				break;
			case "/home/cashbook":
				this.setState({
					defaultKey:["2"]
				})
				break;
			default:
				this.setState({
					defaultKey:["1"]
				})

		}

	}
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultKey}>
      
        <Menu.Item key="1">
        <Link to="/home/todo">
          <Icon type="user" />
          
          <span className="nav-text">todo</span>
          </Link>
        </Menu.Item>
        
        <Menu.Item key="2">
          <Link to="/home/cashbook">
          	<Icon type="video-camera" />
          	<span className="nav-text">记账本</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">还没想好</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">还没想好</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: 'rgba(0, 0, 0, 0.65)', padding: 0 ,color:'#fff'}} >
      	<Row style={{height:'100%'}}>
      		<Col style={{height:'100%'}} xl={{span:10,offset:14}} md={{span:16,offset:8}}>
      			<Row style={{height:'100%'}}>
      				<Col span={12} style={{textAlign:'center'}}>
      					<Icon type="user" style={{fontSize:'25px'}}/>
      					<p style={{display:'inline-block',marginLeft:'10px'}}>
      						<span >HI~</span>
      						<span style={{marginLeft:'20px'}}>dwd555</span>
      					</p>
      				</Col>
      				<Col span={6} style={{textAlign:'center'}}>
      					<a style={{display:'block'}}>
      					<Icon style={{fontSize:'25px'}} type="unlock" />
      					<span>Password</span>
      					</a>
      				</Col>
      				<Col span={6} style={{textAlign:'center'}}>
      				<a style={{display:'block'}}>
      					<Icon style={{fontSize:'25px'}} type="poweroff" />
      					<span>Sign out</span>
      					</a>
      				</Col>
      			</Row>
      		</Col>
      	</Row>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>

        <Switch>
        	<Route exact path="/home/todo" component={Todo} />
        	<Route exact path="/home/cashbook" component={Second} />
        	<Redirect from='/home' to='/home/todo' />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
    );
  }
}

export default Home;
