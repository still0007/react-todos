import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDbClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDblClick={() => onTodoDbClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList