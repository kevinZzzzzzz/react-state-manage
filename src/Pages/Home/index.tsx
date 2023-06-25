import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Input, Space, List, Button, Divider, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import { addTodo, delTodo, getData } from '@/store/actionCreactor';

class HomePage extends PureComponent<any> {
  declare state: {
    count: number,
    todoVal: string | number,
    todoList: string[]
  }
  store: any;
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
      todoVal: '',
      todoList: []
    }
  }
  async componentDidMount(): Promise<void> {
    await this.props.handleGetData()
    this.setState({
      ...this.state,
      count: this.props.count,
      todoList: this.props.todoList,
    })
  }

  async addCount() {
    await this.props.handleAddCount()
    this.setState({
      count: this.props.count
    })
  }
  async delCount() {
    await this.props.handleDelCount()
    this.setState({
      count: this.props.count
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
    await this.props.handleAddTodo(this.state.todoVal)
    this.setState({
      todoList: [...this.props.todoList],
      todoVal: ''
    })
  }
  async delTodo(idx: number) {
    await this.props.handleDelTodo(idx)
    this.setState({
      todoList: [...this.props.todoList],
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
      </>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    count: state.HomePage.count,
    todoList: state.HomePage.todoList
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    async handleGetData() {
      const action: any = await getData()
      dispatch(action)
    },
    handleAddCount() {
      dispatch({
        type: "ADD_COUNT"
      })
    },
    handleDelCount() {
      dispatch({
        type: "DEL_COUNT"
      })
    },
    async handleAddTodo(val: string) {
      const action: any = await addTodo(val)
      dispatch(action)
    },
    async handleDelTodo(idx: number) {
      const action: any = await delTodo(idx)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)