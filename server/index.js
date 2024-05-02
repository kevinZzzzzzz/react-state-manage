const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')

const port = 8080
const data = {
  todoList: [
    'sunDay'
  ],
  count: 10
}
app.use(cors())
app.use(express.json()) // post 请求获取请求体的参数

app.get('/getData', (req, res) => {
  console.log(req)
  res.json({
    code: 0,
    data: data
  })
})
app.post('/addTodo', (req, res) => {
  const { addItem } = req.body
  let newData = {...data}
  newData.todoList.push(addItem)
  res.send({
    code: 0,
    data: newData
  })
})
app.post('/delTodo', (req, res) => {
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