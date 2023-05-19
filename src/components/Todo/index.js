import { Checkbox } from '@mui/material'

const Todo = ({ completed, handleChecked, id, todo }) => {
  return (
    <>
      <Checkbox checked={completed} onChange={() => handleChecked(id)} />
      {todo}
    </>
  )
}

export default Todo
