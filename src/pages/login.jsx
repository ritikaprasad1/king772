import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const handleSubmit =(e) =>{
    navigate('/')
  }
  return (
    <section className='hero'>
      <section className="Heading">
        <h1> WELCOME TO KING772</h1>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit}>
        <div className='username'>
          <h3>Your Username</h3>

          <div className='input-icons'>
            <i className='fa fa-user icon'></i>
            <input
            className='input-field'
              type='email'
              name='email'
              placeholder='Enter your email'></input>
          </div>
        </div>
        <div className='password'>
          <h3>Your Password</h3>
          
          <div className='input-icons'>
            <i className='fa fa-key icon'></i>
            <input
            className='input-field'
              type='password'
              name='password'
              placeholder='Enter your password'></input>
          </div>
        </div>

        <button className='submit-btn'>Submit</button>
        </form>
       


      </section>
    </section>
  )
}

export default Login