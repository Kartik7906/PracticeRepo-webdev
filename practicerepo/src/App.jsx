import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Form:</h1>
      <form>
        <label>UserName</label>
        <input type="text" />
      </form>
    </div>
  )
}

export default App
