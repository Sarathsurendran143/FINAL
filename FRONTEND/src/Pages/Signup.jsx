
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Config'
import log from '../media/Signin.mp4'
import '../Style/Signup.css'


const Signup = () => {
    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    

    const signupfunc = (e) => {
        setLoading(true)
        e.preventDefault();
        e.stopPropagation()
        createUserWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("registered")
                navigate('/')
            })
            .catch((error) => console.log(error))
    }

    return (
     <div className='hero'> 
   
   <div className='container'>   
   <video className='background-video' autoPlay loop muted>
    <source src={log} type='video/mp4'/>
   </video>
<div className="cardin">
    <a className='singup'>SIGN UP</a>
  
  <div className='inputBox'>
      <input   required="required" type="text" onChange={(e) => { setuser(e.target.value) }}></input>
      <span>Username</span>
      </div>
      <div className='inputBox'>
      <input  required="required"  type="password" onChange={(e) => { setpass(e.target.value) }}></input>
      <span>Password</span>
      </div>
      <button type="button" className="signup-button" onClick={signupfunc}>SIGNUP</button>
  <p className='acc'>Already have an accout?: <Link className='a2' to={'/'}>LOGIN</Link></p>
  
</div>
</div> 

</div> 
    )
}

export default Signup
     