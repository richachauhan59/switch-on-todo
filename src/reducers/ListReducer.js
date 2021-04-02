const initialState = [
    {
        title: "First Episode",
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
    },
    {
        title: "Second Episode",
        id: 1,
        cards: [
            {
                id:0,
                text:"Second some text is ther where I dont know what to write"
            },
            {
                id:1,
                text:"Second another some text is ther where I dont know what to write"
            }
        ]
    },
    {
        title: "Third Episode",
        id: 2,
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