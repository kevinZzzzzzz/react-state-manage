import { addCount, addTodoAction, delCount, delTodoAction, getDataAction } from '@/store/slice/HomePageSlice';
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
      todoVal: '',
      numVal: 0
    }
  }
  componentDidMount(): void {
    this.props.getData()
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
    const { todoVal, numVal } = this.state
    const { count, todoList } = this.props
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

const mapStateToProps = (state: any) => ({
  ...state.HomePage
})
// 派发异步的action
const mapDispatchToProps = (dispatch: any) => ({
  getData() {
    dispatch(getDataAction())
  },
  handleAddCount() {
    dispatch(addCount())
  },
  handleDelCount() {
    dispatch(delCount())
  },
  handleAddTodo(todoVal) {
    dispatch(addTodoAction(todoVal))
  },
  handleDelTodo(index) {
    dispatch(delTodoAction(index))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)