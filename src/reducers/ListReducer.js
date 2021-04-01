const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id:0,
                text:"some text is ther where I dont know what to write"
            },
            {
                id:1,
                text:"another some text is ther where I dont know what to write"
            }
        ]
    }
]

const ListsReducer = (state= initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ListsReducer