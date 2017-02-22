import React from 'react'

const Todo = ({ onClick, onDblClick, completed, text }) => (
  <li>
    <span onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    {"    "}
    <a href="#" onClick={(e) => {e.preventDefault(); onDblClick();} }>x</a>
  </li>
)

export default Todo