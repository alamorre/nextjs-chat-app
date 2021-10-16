import React from 'react'

const Auth = () => {
  return (
    <div className='background'>
      <form className='auth-form'>
        <div>
          <input 
            placeholder='email'
          />
        </div>

        <div>
          <input 
            placeholder='password'
            type='password'
          />
        </div>

        <button>
          Login / Sign Up
        </button>
      </form>
    </div>
  )
}

export default Auth
