
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Config'
import sig from '../media/Login.mp4'
import '../Style/Login.css'


const Login = () => {
    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("logged in")
                // navigate('/landing')
            }
            else{
                console.log("failed")
            }
        })
    },[])

    const loginfunc = (e) => {
        setLoading(true)
        e.preventDefault();
        e.stopPropagation()
        signInWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("loggedin")
                navigate('/landing')
            })
            .catch(() => console.log("failed to login"))
    }

    return (
     <div className='hero'> 
   <video className='background-video' autoPlay loop muted>
    <source src={sig} type='video/mp4'/>
   </video>
   <div className='container'>   

<div className="cardin">
    <a className='singup'>LOGIN</a>
  
  <div className='inputBox'>
      <input     required="required" type="text" onChange={(e) => { setuser(e.target.value) }}></input>
      <span>Username</span>
      </div>
      <div className='inputBox'>
      <input  required="required"  type="password" onChange={(e) => { setpass(e.target.value) }}></input>
      <span>Password</span>
      </div>
    
    
    
      <button type="button" className="signup-button" onClick={loginfunc}>LOG IN</button>
  
  <p className='acc'>Don't have an account? :<Link className='a2' to={'/signup'}>Signup</Link></p>
  
</div>
</div> 

</div> 
    )
}

export default Login
// loginfunc