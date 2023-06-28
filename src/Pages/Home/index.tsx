import {homePageAsync} from '@/store/async';
import {useHomePageStore} from '@/store'
import React, { PureComponent } from 'react';
import { Input, Space, List, Button, Divider, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import { connect } from 'react-redux'
import HomeFunComp from './HomeFun';

class HomePage extends PureComponent<any> {
  declare state: any
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
      todoList: [],
      todoVal: '',
      numVal: 0
    }
  }
  async componentDidMount(): Promise<void> {
    await homePageAsync.getDatas()
    this.setState({
      count: useHomePageStore.getState().count,
      todoList: useHomePageStore.getState().todoList
    })
  }
  async addCount() {
    await homePageAsync.addCounts(1000)
    this.setState({
      count: useHomePageStore.getState().count,
    })
  }
  delCount() {
    useHomePageStore.getState().delCount()
    this.setState({
      count: useHomePageStore.getState().count,
    })
  }
  handleChange(e: any) {
    const value: string = e.target.value
    this.setState({
      todoVal: value
    })
  }
  async addTodo() {
    if (!this.state.todoVal) return false
    await homePageAsync.addTodos(this.state.todoVal)
    this.setState({
      todoList: useHomePageStore.getState().todoList,
      todoVal: ''
    })
  }
  async delTodo(idx: number) {
    await homePageAsync.delTodos(idx)
    this.setState({
      todoList: useHomePageStore.getState().todoList,
    })
  }
  render() {
    const { todoVal, numVal, count, todoList } = this.state
    return (
      <>
      <h1 onClick={() => {
        this.setState({
          numVal: numVal+1
        })
      }}>HomeClass-{numVal}</h1>
        <Button type="primary" onClick={() => {
          this.delCount()
        }}>-</Button>
        <h4 className={styles.inline} style={{margin: '0 10px'}}>{count}</h4>
        <Button type="primary" onClick={() => {
          this.addCount()
        }}>+</Button>
        <Divider orientation="left" plain><p>TodoList</p></Divider>
        <Space direction="vertical" size="middle">
          <Space.Compact>
          <Input style={{width: '200px'}} placeholder="请输入内容" value={todoVal} showCount onChange={(e) => {
            this.handleChange(e)
          }} />
          <Button type="primary" disabled={todoVal === ''} onClick={() => {
            this.addTodo()
          }}>添加</Button>
          </Space.Compact>
          <List
            style={{background: '#fff'}}
            header={<div>今日完成</div>}
            bordered
            dataSource={todoList}
            renderItem={(item: any, index: number) => (
              <List.Item
                actions={[<a onClick={() => {
                  this.delTodo(index)
                }}><CloseOutlined /></a>]}
              >
                <Typography.Text><h5 className={styles.inline}>{index + 1}、</h5></Typography.Text>{item}
              </List.Item>
            )}
          />
        </Space>
        <hr />
        <HomeFunComp />
      </>
    )
  }
}

export default HomePage