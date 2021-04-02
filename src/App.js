import React from 'react'
import Login from './components/Login'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'
import { Component } from 'react'
import TodoActionButton from './components/TodoActionButton'

class App extends Component {
  render(){
    const {lists} = this.props;
    return (
      <div  className="App">
        {/* <Login /> */}
        <div style={styles.listsContainer} >
          {
            lists.map(list => <TodoList key={list.id} title={list.title} cards={list.cards} /> )
          }
          <TodoActionButton list />
        </div>
       
      </div>
    );
  }
}

const styles = {
  listsContainer:{
    display:"flex",
    flexDirection:"row",
    margin:8,
  }
}

const mapStateToProps = state => ({
  lists : state.lists
})

export default connect(mapStateToProps)(App);
