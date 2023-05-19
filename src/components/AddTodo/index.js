import { Button, TextField } from '@mui/material'

const AddTodo = ({ handleChange, addInput, handleAdd }) => {
  return (
    <>
      <TextField
        variant='outlined'
        label='add todo'
        size='small'
        onChange={handleChange}
        value={addInput}
        sx={{ ml: '20px' }}
      />

      <Button
        variant='contained'
        onClick={addInput.length > 0 ? handleAdd : ''}
        sx={{ height: '40px', ml: '10px' }}
      >
        Add
      </Button>
    </>
  )
}

export default AddTodo
