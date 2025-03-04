import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Greeting from './Greeting.jsx';
import Syntax from './Syntax.jsx'
import AnimalList from './AnimalList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimalList />
  </StrictMode>,
)
