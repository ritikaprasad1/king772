import React from 'react'
import { useNavigate } from 'react-router-dom'

function Otp() {

 const navigate =useNavigate()

    const handleSubmit= (e) => {
        navigate('/')
      }
      

    return (
        <section className='hero2'>
            <section className="Heading">
                <h1> WELCOME TO KING772</h1>
            </section>
            <form className='otp-form' onSubmit={handleSubmit}>
                <div className='password'>
                    <h3>Enter OTP</h3>

                    <div className='input-icons'>
                        <i className='fa fa-key icon'></i>
                        <input
                            className='input-field'
                            type='password'
                            name='password'
                            placeholder='Enter the OTP'></input>
                    </div>
                </div>
                <button className='submit-btn'>Submit</button>

            </form>
        </section>
    )
}

export default Otp