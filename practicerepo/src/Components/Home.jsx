import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is an Home Page</h1>
      <div className="container">
        <Link to="/LoginPage" ><button>LoginPage</button></Link>
        <Link to="/SignUpPage" ><button>SignUpPage</button></Link>
      </div>
    </div>
  )
}

export default Home
