import {
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { Component } from 'react'
import Todo from '../Todo'
import AddTodo from '../AddTodo'

const data = [
  { id: 1, todo: 'Buy more cat food', completed: false },
  { id: 2, todo: 'Clean the bathroom', completed: false },
  { id: 3, todo: 'Finish React homework', completed: false },
]

class TodoList extends Component {
  state = { list: [...data], addInput: '', counter: 0 }

  //When text is input in the search box, the input is saved in the addInput of the state
  handleChange = (e) => this.setState({ addInput: e.target.value })

  //When add button is clicked a new id is generated which is the next of the last item in the array and the list is updated with newId and the text input to search bar which was stored in addInput in the previous method/function. Finally the state is updated with the new todo at the top of the current data and addinput is reset
  handleAdd = (e) => {
    const items = this.state.list
    const lastItem = items[items.length - 1] //grab last item when to do is inserted at the end of the list
    //when todo is added at the top of the list: first time we need the last itme but from then we need the first item as new todo is to be inserted at the begining and we need the id of the first item

    const newTodo = {
      id: lastItem ? lastItem.id + 1 : 1,
      todo: this.state.addInput,
      completed: false,
    }

    this.setState({ list: [...items, newTodo], addInput: '' })
  }

  //When a checkbox (in Todo component) is clicked the id is passed as an argument and the for each item in the list of the state the id is checked. If the the id matches then toggle the completed value by copying the item and toggling the value. Finally the newArray is passed to the list element of the state
  handleChecked = (id) => {
    const newArray = this.state.list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
    this.setState({ list: newArray })
  }

  //filter the array to only leave with the ones that has not been completed
  handleDelete = () => {
    const newArray = this.state.list.filter((item) => item.completed === false)
    this.setState({ list: newArray })
  }

  render() {
    //The list of todo is mapped and the Todo compoenent is passed with props
    const displayList = this.state.list.map((item) => (
      <ListItem
        key={item.id}
        sx={{ textDecoration: item.completed ? 'line-through' : 'none' }} // change the textDecoration property to line-through if it is completed or else do not change anything
      >
        <Todo
          todo={item.todo}
          completed={item.completed}
          handleChecked={this.handleChecked} //function is passed as a prop. Only this. to be used not this.state as not part of state
          id={item.id}
        />
      </ListItem>
    ))
    return (
      <>
        <Container>
          <Card sx={{ bgcolor: '#d3d3d3', maxWidth: '360px' }}>
            <CardContent>
              <Typography
                variant="h4"
                textAlign="center"
                color="primary"
                fontWeight="700"
              >
                Todo list
              </Typography>
              <List>{displayList}</List>

              <AddTodo
                handleChange={this.handleChange}
                addInput={this.state.addInput}
                handleAdd={this.handleAdd}
              />

              <Button
                variant="contained"
                onClick={this.handleDelete}
                sx={{ ml: '20px', mt: '20px' }}
              >
                Delete completed
              </Button>
            </CardContent>
          </Card>
        </Container>
      </>
    )
  }
}

export default TodoList
