import React from 'react'
import '../App.css'
import Tasks from './TaskList'
import TaskListContextProvider from '../contexts/taskListContext'
import TaskForm from './TaskForm'
import Header from '../components/Header'

const App = () => {
    return (
        <TaskListContextProvider> 
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <Tasks />
                    </div>
                </div>
               
            </div>
        </TaskListContextProvider>
    )
    
}
export default App;
