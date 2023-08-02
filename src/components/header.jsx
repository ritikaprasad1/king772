import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

function header() {
  return (
    <header className='header'>
      <div className='kings'>
        <Link to = '/'>King772</Link>
      </div>
      <ul>
        {/* <li>
          <button className='btn'>Logout</button>
        </li> */}
        <li>
          <Link to ='/login'>Login</Link>
        </li>
        <li>
          <Link to = '/register'>Register</Link>
        </li>
      </ul>
    </header>
  )
}

export default header