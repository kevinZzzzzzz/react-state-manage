const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')

const port = 8882
const data = {
  todoList: [
    'sunDay'
  ],
  count: 10
}
app.use(cors())
app.use(express.json()) // post 请求获取请求体的参数

app.get('/getData', (req: any, res: any) => {
  res.json({
    code: 0,
    data: data
  })
})
app.post('/addTodo', (req: any, res: any) => {
  const { addItem } = req.body
  let newData = {...data}
  newData.todoList.push(addItem)
  res.send({
    code: 0,
    data: newData
  })
})
app.post('/delTodo', (req: any, res: any) => {
  const {index} = req.body
  let newData = {...data}
  newData.todoList.splice(index, 1)
  res.json({
    code: 0,
    data: data
  })
})
server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})