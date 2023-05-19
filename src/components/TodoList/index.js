import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import Todo from '../Todo'
import AddTodo from '../AddTodo'

const TodoList = () => {
  const [list, setList] = useState([])
  const [addInput, setAddInput] = useState('')

  const handleChange = (e) => {
    setAddInput(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()

    const lastItem = list[list.length - 1]
    const newTodo = {
      id: lastItem ? lastItem.id + 1 : 1,
      todo: addInput,
      completed: false,
    }

    setList([...list, newTodo])
    setAddInput('')
  }

  const handleChecked = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
    setList(newList)
  }

  const handleDelete = () => {
    const newList = list.filter((item) => !item.completed)
    setList(newList)
  }

  const displayList = list.map((item) => (
    <ListItem
      key={item.id}
      sx={{ textDecoration: item.completed ? 'line-through' : 'none' }}
    >
      <Todo
        todo={item.todo}
        completed={item.completed}
        handleChecked={handleChecked}
        id={item.id}
      />
    </ListItem>
  ))

  return (
    <>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      >
        <Card sx={{ bgcolor: '#d3d3d3', maxWidth: '360px' }}>
          <CardContent>
            <Typography
              variant='h4'
              textAlign='center'
              color='primary'
              fontWeight='700'
            >
              Todo list
            </Typography>
            <List>
              {list.length >= 1 ? (
                displayList
              ) : (
                <Typography
                  variant='h6'
                  textAlign='center'
                  color='primary'
                  mb='20px'
                >
                  Enter your To-Do item
                </Typography>
              )}
            </List>

            <AddTodo
              handleChange={handleChange}
              addInput={addInput}
              handleAdd={handleAdd}
            />

            <Button
              variant='contained'
              onClick={handleDelete}
              sx={{ display: 'block', m: '30px auto 10px auto' }}
            >
              Delete completed
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default TodoList
