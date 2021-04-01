import React from 'react'
import Login from './components/Login'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'
import { Component } from 'react'

class App extends Component {
  render(){
    const {lists} = this.props;
    return (
      <div className="App">
        {/* <Login /> */}
        {
          lists.map(list => <TodoList title={list.title} cards={list.cards} /> )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists : state.lists
})

export default connect(mapStateToProps)(App);
