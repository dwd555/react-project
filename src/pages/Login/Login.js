import React, { Component } from 'react';
import { Layout,Form, Icon, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const FormItem = Form.Item;
class Login extends Component {
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.userName=="dwd555"&&values.password=="123456"){
        	//console.log(this.props)
        	this.props.history.push("/home")
        }
      }
    });
  }

  render() {
  	 const { getFieldDecorator } = this.props.form;
    return (
     <Layout>
     	<Header>头</Header>
     	<Content>
     		<div style={{'width':'300px','height':'300px','marginLeft':'-150px','marginTop':'-150px','position':'fixed','left':'50%','top':'50%'}}>
     			<Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
     		</div>
     	</Content>
     </Layout>
    );
  }
}
const Loginb = Form.create()(Login);
export default Loginb;
