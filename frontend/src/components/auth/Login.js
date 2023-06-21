import React from 'react'
import './Login.css';
import {signInWithPopup} from 'firebase/auth'
import { provider } from '../../firebase';
import {auth} from '../../firebase';
function Login() {

  const handleSubmit = async()=>{
    await signInWithPopup(auth,provider).then((result)=>{
      console.log(result)
    }).catch((error)=>{
console.log(error)
    })
  }
  return (
    <div className='login-container'>
 <div className="login-content">
    <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="img" />
<button className='btn-login' onClick={handleSubmit}  >Login to continue</button>
 </div>
    </div>
  )
}

export default Login