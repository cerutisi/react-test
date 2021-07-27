import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todo, index}) {
  const { removeTodo } = useContext(Context)

  return (
    <li style={styles.li}>
      <span>
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.first_name}
        {todo.last_name}
      </span>

      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
}

export default TodoItem
