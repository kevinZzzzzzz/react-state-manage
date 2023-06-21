import React, { PureComponent } from 'react';
import { Input, Space, Button } from 'antd';

class HomePage extends PureComponent<any> {
  declare state: any
  store: any;
  constructor(props: any) {
    super(props)
    this.store = props.store
    console.log(props.store.getState().HomePage, 111)
    this.state = {
      ...props.store.getState().HomePage
    }
  }
  addCount() {
    this.store.dispatch({type: 'ADD_COUNT'})
    // this.setState({
    //   ...this.store.getState().HomePage
    // })
  }
  delCount() {
    this.store.dispatch({type: 'DEL_COUNT'})
    // this.setState({
    //   ...this.store.getState().HomePage
    // })
  }
  render() {
    const { count } = this.state
    return (
      <>
        <h1>Home Page</h1>
        <hr />
        <Button type="primary" onClick={() => {
          this.delCount()
        }}>-</Button>
        <h4 style={{display: 'inline'}}>{count}</h4>
        <Button type="primary" onClick={() => {
          this.addCount()
        }}>+</Button>
        <br />
        <Space direction="vertical" size="middle">
          <Space.Compact>
          <Input style={{width: '200px'}} placeholder="请输入内容" />
          <Button type="primary">添加</Button>
          </Space.Compact>
        </Space>
      </>
    )
  }
}

export default HomePage