import React from 'react'
import{useContext} from 'react'
import {TaskListContext} from '../contexts/taskListContext'

 const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext)

    return (
        <>
            <li className="list-item">
                <span>{task.title}</span>
                <div>
                    <button className="btn-delete task-btn"  onClick={() => removeTask(task.id)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                        <i className="fa fa-pencil" aria-hidden="true" ></i>

                    </button>
                </div>
            </li>
        </>
    )
}

export default Task