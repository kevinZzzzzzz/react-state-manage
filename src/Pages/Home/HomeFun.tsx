import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, Input, List, Space, Typography } from 'antd';
import React, { useState, memo, useEffect } from 'react';
import styles from './index.module.scss'
import {homePageAsync} from '@/store/async';
import {useHomePageStore} from '@/store'

function HomeFunComp(props: any) {
  const [count, setCount] = useState(useHomePageStore((data) => data.count))
  const [todoList, setTodoList] = useState(useHomePageStore((data) => data.todoList))
  
  useEffect(() => {
    homePageAsync.getDatas()
  }, [])
  const [todoVal, setTodoVal] = useState<string>('')
  const [numVal, setnumVal] = useState<number>(0)
  const handleAddCount = async () => {
    await homePageAsync.addCounts(1000)
    setCount(useHomePageStore.getState().count)
  }
  const handleDelCount = () => {
    useHomePageStore.getState().delCount()
    setCount(useHomePageStore.getState().count)
  }
  const handleAddTodo = async () => {
    await homePageAsync.addTodos(todoVal)
    setTodoList(useHomePageStore.getState().todoList)
    setTodoVal('')
    // dispatch(addTodoAction(todoVal))
  }
  const handleDelTodo = async (idx: number) => {
    await homePageAsync.delTodos(idx)
    setTodoList(useHomePageStore.getState().todoList)
    // dispatch(delTodoAction(idx))
  }
  return (
    <>
      <h1 onClick={() => {
        setnumVal(() => numVal+1)
      }}>HomeFun-{numVal}</h1>
      
      <Button type="primary" onClick={() => {
          handleDelCount()
        }}>-</Button>
        <h4 className={styles.inline} style={{margin: '0 10px'}}>{count}</h4>
        <Button type="primary" onClick={() => {
          handleAddCount()
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
export default memo(HomeFunComp)