import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  // const [formData, setFormData] = useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   password2:""
  // })

  // const [name, email,password, password2]= formData

  // const handleChange = (e) =>{
  //   setFormData({
  //     ...formData,
  //     [e.target.name] : e.target.value
  //   })
  // }
  
  const handleSubmit= (e) => {
    navigate('/otp')
  }
  
  return (
    <section className='hero'>
      <section className="Heading">
        <h1> WELCOME TO KING772</h1>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit}>
        <div className='username'>
          <h3>Your Name</h3>

          <div className='input-icons'>
            <i className='fa fa-user icon'></i>
            <input
            className='input-field'
              type='text'
              name='text'
              // onChange={handleChange}
              // value={name}
              placeholder='Enter your text'></input>
          </div>
        </div>
          
        <div className='username'>
          <h3>Your Username</h3>

          <div className='input-icons'>
            <i className='fa fa-envelope icon'></i>
            <input
            className='input-field'
              type='email'
              name='email'
              // onChange={handleChange}
              // value={email}
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
              // onChange={handleChange}
              // value={password}
              placeholder='Enter your password'></input>
          </div>
        </div>

        <div className='password'>
          <h3>Confirm Password</h3>
          
          <div className='input-icons'>
            <i className='fa fa-key icon'></i>
            <input
            className='input-field'
              type='password'
              name='password'
              // onChange={handleChange}
              // value={password2}
              placeholder='Re-enter your password'></input>
          </div>
        </div>

        <button className='submit-btn'>Submit</button>
        </form>
       


      </section>
    </section>
  )
}

export default Register