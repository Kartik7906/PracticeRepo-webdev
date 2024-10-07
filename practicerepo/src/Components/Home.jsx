import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='Homecontainer'>
      <h1>This is an Home Page</h1>
      <div className="container">
        <Link to="/LoginPage" ><button>Login</button></Link>
        <Link to="/SignUpPage" ><button>SignUp</button></Link>
      </div>
    </div>
  )
}

export default Home
