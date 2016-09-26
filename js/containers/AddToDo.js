import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <button type="submit">
          Add Todo
        </button>
        <input ref={node => {
          input = node
        }} />

      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo