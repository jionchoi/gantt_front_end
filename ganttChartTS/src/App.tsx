import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import AddCategory from './components/AddCategory'
import './css/App.css'
import Category from './components/Category'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  //enum for priority
  enum Priority {
    URGENT,
    HIGH,
    MEDIUM,
    LOW
  }

  //declare types for category componenet
  interface Category {
    name: string,
    type: string,
    email: string,
    photoURL: string,
    status: boolean,
    priority: Priority
  }

  //declare types for category componenet
  interface User {
    id: string,
    name: string,
    email: string,
    photoURL: string,
    status: boolean,
    priority: Priority
  }

  interface Task {
    title: string,
    name: string,
    duedate: string,
    done: boolean,
    duration: string,
    startDate: string,
    endDate: string,
    subtasks: Array<string>
  }

  //placeholder for categoryName object
  const category: Category = {
    name: 'School',
    type: 'school',
    email: '',
    photoURL: '',
    status: true,
    priority: Priority.LOW
  }

  //placeholder for categoryName object
  const user: User = {
    id: '',
    name: 'Jion Choi',
    email: '',
    photoURL: '',
    status: true,
    priority: Priority.LOW
  }

  //placeholder for categoryName object
  const task: Task = {
    title: "week 3 assignment",
    name: "math",
    duedate: "",
    done: false,
    duration: "",
    startDate: "",
    endDate: "",
    subtasks: []
  }

  return (
    <>
      { /* Top Navigation Bar */}
      <TopNavBar user={user} />
      <main>
        { /* Setting Routes for urls */}
        <Routes>
          <Route path='/' element={<Navigate to={'/dashboard'} />} />
          <Route path='/dashboard' 
                element={
                  <>
                    <AddCategory/>
                    <Category categoryName={category}/>
                  </>}/>
          <Route path='/categoryName' element={<Task task={task} />} />
          
        </Routes>

      </main>
    </>
  )
}

export default App
