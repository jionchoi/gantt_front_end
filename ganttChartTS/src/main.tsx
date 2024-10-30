import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import ReactDOM from 'react-dom/client';
import Category from './components/CategoryDetail.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')!); // '!' means it's neither null nor undefined
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
  
//   </StrictMode>,


// ) //run the website npm install    npm run dev
