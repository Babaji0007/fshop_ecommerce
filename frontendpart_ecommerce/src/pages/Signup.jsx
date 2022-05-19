import React from 'react'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div>
      <Navbar/>
      <div className='signup_page_body' >
      <div class="container">
  <div class="header">
    <h2>Create Account</h2>
  </div>
  <form id="form" class="form">
    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" placeholder="" id="username" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="username">Email</label>
      <input type="email" placeholder="" id="email" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="username">Password</label>
      <input type="password" placeholder="" id="password" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="username">Password check</label>
      <input type="password" placeholder="re-enter" id="password2" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <button>Submit</button>
  </form>
</div>
      
      </div>
      
      </div>
  )
}

export default Signup