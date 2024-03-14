import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAllItem ,deleteAllCompleted,changeActiveFilter,selectItems,selectFilter} from '../redux/todo/todoSlice'


function ContentFooter() {
	const items = useSelector(selectItems)
    const itemsLeft = items.filter((item) => !item.completed)

	const activeFilter = useSelector(selectFilter)

	const dispatch = useDispatch()

	const deleteAlll = () => {
		dispatch(deleteAllItem())
	}

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{itemsLeft.length}</strong>
			{
				(itemsLeft.length) === 1 ? "item left" : "items left"
			}
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={() => dispatch(changeActiveFilter("all"))} className={activeFilter === "all" ? "selected" :""}  >All</a>
			</li>
			<li>
				<a href="#/" onClick={() => dispatch(changeActiveFilter("active"))} className={activeFilter === "active" ? "selected" :""}  >Active</a>
			</li>
			<li>
				<a href="#/"  onClick={() => dispatch(changeActiveFilter("completed"))} className={activeFilter === "completed" ? "selected" :""}> Completed</a>
			</li> 
		</ul>

		<button onClick={() => deleteAllCompleted()}  className="clear-completed">
			Clear completed 
		</button>

		<button onClick={() => deleteAlll()}  className="clear-completed">
			Clear all {"/"}
		</button>
	</footer>
  )
}

export default ContentFooter