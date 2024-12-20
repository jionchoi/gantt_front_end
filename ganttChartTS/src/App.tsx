import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import Category from './components/Category'
import TopNavBar from './components/TopNavBar'
import AddCategory from './components/AddCategory'
import Task from './components/Task'
import "./css/App.css"
import TaskGrid from './components/TaskGrid'

function App() {
  const [count, setCount] = useState(0)

  //enum for priority
  enum Priority {
    URGENT,
    HIGH,
    MEDIUM,
    LOW
  }


  //interface only applies to objects
  //interface for category object
  interface Category {
    name: string,
    type: string,
    email: string,
    photoURL: string,
    status: boolean,
    priority: Priority
  }

  //interface for User object
  interface User {
    id: string,
    name: string,
    email: string,
    photoURL: string,
    status: boolean,
    priority: Priority
  }

  //interface for User object
  interface Task {
    title: string,
    name: string, 
    duedate: string, //should be changed it something eles
    done: Boolean,
    duration: number, 
    startDate: Date, 
    endDate: string,
    subtasks: any
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

  //placeholder for task object
  const task: Task = {
    title: 'Week 3 Lab Assignment',
    name: 'idk', 
    duedate: 'duedate', //should be changed it something eles
    done: false,
    duration: 20, 
    startDate: new Date(2024,11,1), //the month is 0-indexed
    endDate: 'end date',
    subtasks: {
      first: "create a function",
      second: "something someting"
    }
  }
  
  function getUserInformation(){

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
              <AddCategory />
              <Category categoryName={category} /> {/* Change it to categoryList so that the website lists all categories*/} 
            </>} /> 
          <Route path='/categoryName' element={<TaskGrid task={task} />} /> {/* TaskGid is only one line and tasklist should list all main tasks and subtasks in on page*/}
        </Routes>
      </main>
    </>
  )
}

export default App
