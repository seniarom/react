import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  console.log('input', text)

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>

        <TextField
          id="outlined-basic"
          label="Add Message"
          variant="outlined"
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          type="submit"
        >
          Add message
        </Button>
      </form>

    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}