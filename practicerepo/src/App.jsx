import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Signup from './Components/Signup'

function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/LoginPage" element={<Form/>} />
      <Route path="/SignUpPage" element={<Signup/>} />
    </Routes>
  </Router>
  )
}

export default App
