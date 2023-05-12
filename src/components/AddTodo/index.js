import { Button, TextField } from '@mui/material'
import { Component } from 'react'

class AddTodo extends Component {
  render() {
    return (
      <>
        <TextField
          variant="outlined"
          label="add todo"
          size="small"
          onChange={this.props.handleChange}
          value={this.props.addInput}
          sx={{ ml: '20px' }}
        />

        <Button
          variant="contained"
          onClick={this.props.handleAdd}
          sx={{ height: '40px', ml: '10px' }}
        >
          Add
        </Button>
      </>
    )
  }
}

export default AddTodo
