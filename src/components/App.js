import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodoBlock from '../containers/AddTodoBlock'
import Footer from './Footer'

const App = () => (
  <div>
    <Footer />
    <AddTodoBlock />
    <VisibleTodoList />
  </div>
)

export default App
