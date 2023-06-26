import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, Input, List, Space, Typography } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.scss'
import {useSelector, useDispatch} from 'react-redux'
function HomeFunComp(props: any) {
  const {count, todoList} = useSelector((store: any) => {
    return store.HomePage
  })
  const dispatch = useDispatch()
  const [todoVal, setTodoVal] = useState<string>('')
  const addCount = () => {
    dispatch({
      type: "ADD_COUNT_START"
    })
  }
  const delCount = () => {
    dispatch({
      type: "DEL_COUNT_START"
    })
  }
  const handleAddTodo = async () => {
    setTodoVal('')
    dispatch({
      type: 'ADD_TODO_START',
      payload: todoVal
    })
  }
  const handleDelTodo = async (idx: number) => {
    dispatch({
      type: 'DEL_TODO_START',
      payload: idx
    })
  }
  return (
    <>
      <h1>HomeFun</h1>
      
      <Button type="primary" onClick={() => {
          delCount()
        }}>-</Button>
        <h4 className={styles.inline} style={{margin: '0 10px'}}>{count}</h4>
        <Button type="primary" onClick={() => {
          addCount()
        }}>+</Button>
        <Divider orientation="left" plain><p>TodoList</p></Divider>
        <Space direction="vertical" size="middle">
          <Space.Compact>
          <Input style={{width: '200px'}} placeholder="请输入内容" value={todoVal} showCount onChange={(e) => {
            setTodoVal(e.target.value)
          }} />
          <Button type="primary" disabled={todoVal === ''} onClick={() => {
            handleAddTodo()
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
                  handleDelTodo(index)
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
export default HomeFunComp