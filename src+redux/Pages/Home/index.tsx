import React, { PureComponent } from 'react';
import { Input, Space, List, Button, Divider, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss'

class HomePage extends PureComponent<any> {
  declare state: {
    count: number,
    todoVal: string | number,
    todoList: string[]
  }
  store: any;
  constructor(props: any) {
    super(props)
    this.store = props.store
    this.state = {
      count: props.store.getState().HomePage.count,
      todoVal: '',
      todoList: props.store.getState().HomePage.todoList
    }
  }
  addCount() {
    this.store.dispatch({type: 'ADD_COUNT'})
    this.setState({
      count: this.store.getState().HomePage.count
    })
  }
  delCount() {
    this.store.dispatch({type: 'DEL_COUNT'})
    this.setState({
      count: this.store.getState().HomePage.count
    })
  }
  handleChange(e: any) {
    let value = e.target.value
    this.setState({
      todoVal: value
    })
  }
  addTodo() {
    this.store.dispatch({type: 'ADD_TODO', payload: this.state.todoVal})
    setTimeout(() => {
      this.setState({
        todoList: [...this.store.getState().HomePage.todoList],
        todoVal: ''
      })
    }, 2000)
  }
  delTodo(idx: number) {
    this.store.dispatch({type: 'DEL_TODO', payload: idx})
    this.setState({
      todoList: [...this.store.getState().HomePage.todoList],
    })
  }
  render() {
    const { count, todoVal, todoList } = this.state
    return (
      <>
        <h1>Home Page</h1>
        <hr />
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
          <Button type="primary" onClick={() => {
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
      </>
    )
  }
}

export default HomePage