import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodoBlock from '../containers/AddTodoBlock'
import ProgressFooter from '../containers/ProgressFooter'
import { fetchTodos } from '../actions'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchTodos())
  }

  render() {
    return (
      <div>
        <ProgressFooter />
        <AddTodoBlock />
        <VisibleTodoList />
      </div>
    )
  }
}

export default connect()(App)
