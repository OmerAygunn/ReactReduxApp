import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items: [],
        activeFilter : "all"
        
    },
    reducers:{
        addTodos: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state,action) => {
            const {id} = action.payload
            const findItems = state.items.find((item) => item.id === id)
            findItems.completed = !findItems.completed
        },
        destroy:(state,action) => {
            const id = action.payload
            const filterItems = state.items.filter((item) => item.id !== id)
            state.items=filterItems
        },
        deleteAllCompleted:(state) => {
           const filter = state.items.filter((item) => item.completed === false )
           state.items=filter
        },
        deleteAllItem:(state) => {
            state.items = []
        },
        changeActiveFilter:(state,action) => {
            state.activeFilter = action.payload
        }
       
      
    }
})
export const  selectItems = (state) => state.todo.items

export const selectFilterTodos = (state) => {
    if(state.todo.activeFilter === "all"){
        return state.todo.items
    }
    return state.todo.items.filter((item) =>
     state.todo.activeFilter === "active" ? item.completed === false :
     item.completed === true
     )
}

export const selectFilter = (state) => state.todo.activeFilter

export const {addTodos, toggle,destroy,deleteAllItem,deleteAllCompleted,changeActiveFilter} = todosSlice.actions
export default todosSlice.reducer;