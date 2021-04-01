import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({title, cards}) => {
    console.log(title)
    console.log(cards[0].text)
    console.log(cards)
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {
                cards.map(item => (
                    <TodoCard text={item.text} />
                ))
            }
            {/* <TodoCard text="kuchhh bhi" /> */}
        </div>
    )
}

{/* <h4>{title}</h4>
            {cards.map(card => {
                <TodoCard text={card.text} />
            })} */}


const styles = {
    container :{
        backgroundColor:"#ccc",
        borderRadius: 3,
        width:300,
        padding:8,
    }
}

export default TodoList