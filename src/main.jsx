import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './reset.css'
import TodoListAPP from './TodoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListAPP />
  </StrictMode>,
)
