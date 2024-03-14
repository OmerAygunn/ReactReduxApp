import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggle,destroy ,selectFilterTodos} from '../redux/todo/todoSlice'



function TodoList() {

    const filteredItems = useSelector(selectFilterTodos)
    const dispatch = useDispatch() 

   

    const handleDestroy = (id,title) => {
        if(window.confirm(`Are you sure delete this ${title}`)){
            dispatch(destroy(id))
        }
    }
    

    return (
        <ul className="todo-list">
            
            {
                filteredItems.map((item) => (
                    <li  key={item} className={item.completed ? "completed" : ""}>
                        <div className="view">
                            <input className="toggle" type="checkbox" onClick={() =>dispatch(toggle({id:item.id})) } />
                            <label>{item.title}</label>
                            <button onClick={() => handleDestroy(item.id,item.title)}  className="destroy"></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList