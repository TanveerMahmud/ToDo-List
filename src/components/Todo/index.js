import { Checkbox } from '@mui/material'
import { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <>
        {/* Checkbox is used in the Todo component as per instruction. The current status of the checkbox (ticked or not) is passed as the props from the parent TodoList based on the completed element of the arrays in the list declared in the parent state. A function props is pased and used in onChange which changes the state in the parent state based on whether the checkbox is clicked or not */}
        <Checkbox
          checked={this.props.completed}
          onChange={() => this.props.handleChecked(this.props.id)}
        />
        {this.props.todo}
      </>
    )
  }
}

export default Todo
