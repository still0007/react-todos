import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodoBlock from '../containers/AddTodoBlock'
import ProgressFooter from '../containers/ProgressFooter'
import { fetchTodos } from '../actions'
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchTodos())
  }

  render() {
    return (
      <div style={{margin: 0}}>
        <LoadingBar style={{ backgroundColor: 'green' }}/>
        <ProgressFooter />
        <AddTodoBlock />
        <VisibleTodoList />
      </div>
    )
  }
}

export default connect()(App)
