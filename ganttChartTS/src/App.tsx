import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import AddCategory from './components/AddCategory'


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
  type Category = {
    name: string;
    type: string;
    email: string;
    photoURL: string;
    status: boolean;
    priority: Priority;
  }

  //declare types for category componenet
  type User = {
    id: string;
    name: string;
    email: string;
    photoURL: string;
    status: boolean;
    priority: Priority;
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


  return (
    <>
      { /* Top Navigation Bar */}
      <TopNavBar user={user} />

      <main>
        { /* Setting Routes for urls */}
        <Routes>
          <Route path='/' element={<Navigate to={'/categoryName'} />} />
          <Route path='/categoryName' element={<Category categoryName={category} />} />
        </Routes>
        <AddCategory />

      </main>
    </>
  )
}

export default App
