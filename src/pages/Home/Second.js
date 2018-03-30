import React, { Component } from 'react';
import { Table, Icon, Divider ,Button,Modal,DatePicker,Input,Form,Row, Col } from 'antd';
const FormItem = Form.Item
class Second extends Component {
	constructor(props){
		super(props);
		this.columns = [{
			  title: '日期',
			  dataIndex: 'date',
			  key: 'date',
			}, {
			  title: '地点',
			  dataIndex: 'address',
			  key: 'address',
			},{
			  title: '金额',
			  dataIndex: 'pay',
			  key: 'pay',
			}, {
			  title: '操作',
			  key: 'action',
			  render: (text, record) => (
			    <span>
			      <a href="#" onClick={()=>this.delete(record.key)}>
			        删除
			      </a>
			    </span>
			  ),
			}];
		this.state={
			data:[{
			  key: '0',
			  date:'2018-03-27',
			  address:'岭南站',
			  pay: '100',
			},{
			  key: '1',
			  date:'2018-03-27',
			  address:'岭南站',
			  pay: '200',
			}, {
			  key: '2',
			  date:'2018-03-27',
			  address:'岭南站',
			  pay: '300',
			}],
			count:3,
			visible:false,
			confirmLoading:false,
			date:"",
			address:"",
			pay:"",
			addressWarning:false,
			}
			this.changeAddData=this.changeAddData.bind(this)
			this.addressChange=this.addressChange.bind(this)
			this.addressBlur=this.addressBlur.bind(this)
		}
		delete(e){
			//this.state.data.filter((v)=>{})
			this.setState({
				data:this.state.data.filter((v)=>v.key!=e)
			})
		}
		showModal(){
			this.setState({visible:true})
		}
		handleOk(){
			this.setState({visible:false})
		}
		handleCancel(){
			this.setState({visible:false})
		}
		changeAddData(dates, dateStrings){
			console.log(dateStrings)
		}
		addressChange(event){
			this.setState({
				address:event.target.value
			})
			if(this.state.address.length<=0){
				this.setState({
					addressWarning:true
				})
			}else{
				this.setState({
					addressWarning:false
				})
			}
		}
		addressBlur(){
			if(this.state.address.length<=0){
				this.setState({
					addressWarning:true
				})
			}else{
				this.setState({
					addressWarning:false
				})
			}
		}
  render() {
    return (
    	<div>
     <Button type="primary" onClick={()=>this.showModal()} icon="file-add" size={'large'}>添加记录</Button>
     <Table columns={this.columns} dataSource={this.state.data} />
     <Modal title="添加记录" okText="确定" cancelText="取消"
          visible={this.state.visible}
          onOk={()=>this.handleOk()}
          confirmLoading={this.state.confirmLoading}
          onCancel={()=>this.handleCancel()}
        >
          <div>
          	<Row style={{marginBottom:'25px'}}>
          		<Col md={{span:5}} style={{lineHeight:'32px',
    textAlign:'right'}}>
          			<label>
          				时间：
          			</label>
          		</Col>
          		<Col md={{span:12}}>
          			<DatePicker onChange={this.changeAddData} />
          		</Col>
          	</Row>
          	<Row style={{marginBottom:'25px'}}>
          		<Col md={{span:5}} style={{lineHeight:'32px',
    textAlign:'right'}}>
          			<label>
          				地点：
          			</label>
          		</Col>
          		<Col md={{span:12}} style={{position:'relative'}}>
          			<Input onBlur={this.addressBlur} className={this.state.addressWarning?'warning-input':null} value={this.state.address} onChange={this.addressChange} placeholder="请输入地址"/>
          			<p style={{color:'#f5222d','position':'absolute',display:this.state.addressWarning?"block":"none"}}>请输入地址</p>
          		</Col>
          	</Row>
          	<Row style={{marginBottom:'25px'}}>
          		<Col md={{span:5}} style={{lineHeight:'32px',
    textAlign:'right'}}>
          			<label>
          				消费金额：
          			</label>
          		</Col>
          		<Col md={{span:12}}>
          			<Input type="Number" placeholder="请输入金额"/>
          		</Col>
          	</Row>
          </div>
        </Modal>
     </div>
    );
  }
}

export default Second;
