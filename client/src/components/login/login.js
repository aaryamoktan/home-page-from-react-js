import React from 'react'
import "../css/login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container'>
    <form>
        <div className='logincontainer'>
            <div className='input'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
               
                    <input type="text" className='username' placeholder="Username" name="username"/>
                    <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg>
                
                    <input type="password" className='password' placeholder="Password" name="password"/>
                    <br/>
                
                    <input type="submit" className='submit' value="Login"/>
                
            </div>
            <div className='account'>
                <p>If you havenot your account click here<h3><Link to="/register" style={{textDecoration:'none'}}><p>Register</p></Link></h3> to  create new account</p>
            </div>
        </div></form>
    </div>
  )
}

export default Login
