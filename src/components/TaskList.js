import React from 'react'
import {useContext} from 'react'
import {TaskListContext} from '../contexts/taskListContext'
import Task from './Task'


 const TaskList = () => {
    const {tasks} =  useContext(TaskListContext)
    return (
        <div>
            {tasks.length ? 
                (
                    <ul className="list">
                        {tasks.map(task => ( <Task key={task.id} task={task} />  ))}
                    </ul>
                )
                : (<div className="no-tasks">No Tasks</div>)
            }
            
        </div>
    )
}
export default TaskList
