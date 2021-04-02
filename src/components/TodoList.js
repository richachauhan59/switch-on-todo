import React from 'react'
import TodoCard from './TodoCard'
import TodoActionButton from './TodoActionButton'

const TodoList = ({title, cards}) => {
    console.log(title)
    console.log(cards[0].text)
    console.log(cards)
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {
                cards.map(item => (
                    <TodoCard key={item.id} text={item.text} />
                ))
            }
            <TodoActionButton/>
        </div>
    )
}

const styles = {
    container :{
        backgroundColor:"#ccc",
        borderRadius: 3,
        width:300,
        padding:8,
        height:"100%",
        margin:8
    }
}

export default TodoList