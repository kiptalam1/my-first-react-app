import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Greeting from './Greeting.jsx';
import Syntax from './Syntax.jsx'
import AnimalList from './AnimalList.jsx'
import MainApp from './ComponentLists.jsx'
import TodoList from './TodoList.jsx'
import ButtonApp from './DataPassing.jsx'
import ButtonAppu from './FunctionsProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonAppu />
  </StrictMode>,
)
