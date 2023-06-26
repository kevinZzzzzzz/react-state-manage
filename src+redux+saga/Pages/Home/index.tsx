import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Input, Space, List, Button, Divider, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import { addTodo, delTodo, getData } from '@/store/actionCreactor';
import HomeFunComp from './HomeFun';

class HomePage extends PureComponent<any> {
  declare state: {
    todoVal: string | number,
  }
  store: any;
  constructor(props: any) {
    super(props)
    this.state = {
      todoVal: '',
    }
  }
  async componentDidMount(): Promise<void> {
    await this.props.handleGetData()
  }

  async addCount() {
    await this.props.handleAddCount()
  }
  async delCount() {
    await this.props.handleDelCount()
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
      todoVal: ''
    })
  }
  async delTodo(idx: number) {
    await this.props.handleDelTodo(idx)
  }
  render() {
    const { todoVal } = this.state
    const { count, todoList } = this.props
    return (
      <>
        <h1>HomeClass</h1>
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
const mapStateToProps = (state: any) => {
  return {
    count: state.HomePage.count,
    todoList: state.HomePage.todoList
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     handleGetData: async () => {
      dispatch({
        type: 'GET_DATA_START'
      })
    },
    handleAddCount() {
      dispatch({
        type: "ADD_COUNT_START"
      })
    },
    handleDelCount() {
      dispatch({
        type: "DEL_COUNT_START"
      })
    },
    async handleAddTodo(val: string) {
      dispatch({
        type: 'ADD_TODO_START',
        payload: val
      })
    },
    async handleDelTodo(idx: number) {
      dispatch({
        type: 'DEL_TODO_START',
        payload: idx
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)