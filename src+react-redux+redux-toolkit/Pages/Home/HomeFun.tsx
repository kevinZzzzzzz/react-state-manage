import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, Input, List, Space, Typography } from 'antd';
import { addCount, addTodoAction, delCount, delTodoAction, getDataAction } from '@/store/slice/HomePageSlice';
import React, { useState, memo } from 'react';
import styles from './index.module.scss'
import { useAppSelector, useAppDispatch } from '@/store/hooks';
function HomeFunComp(props: any) {
  const {count, todoList} = useAppSelector((store: any) => {
    return store.HomePage
  })
  const dispatch = useAppDispatch()
  const [todoVal, setTodoVal] = useState<string>('')
  const [numVal, setnumVal] = useState<number>(0)
  const handleAddCount = () => {
    dispatch(addCount())
  }
  const handleDelCount = () => {
    dispatch(delCount())
  }
  const handleAddTodo = async () => {
    setTodoVal('')
    dispatch(addTodoAction(todoVal))
  }
  const handleDelTodo = async (idx: number) => {
    dispatch(delTodoAction(idx))
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