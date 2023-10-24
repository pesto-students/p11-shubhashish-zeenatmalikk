import { useState } from 'react'
import './App.css'
import AddTodo from './pages/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddTodo/>
    </div>
  )
}

export default App
