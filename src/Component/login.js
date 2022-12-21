import React,{useEffect} from 'react';
import { json, Navigate, useNavigate } from 'react-router-dom';
import "../App.css"
const Login=()=>{
    const [email,setEmail]=React.useState();
    const [password,setPassword]=React.useState();
    const Navigate=useNavigate();
    useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        Navigate('/profile')
    }
},[])
    const handleLogin=async ()=>{
        console.warn("email,password",email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'content-type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result)
        if(result.auth)
        {
            localStorage.setItem("user",JSON.stringify(result.user))
            localStorage.setItem("token",JSON.stringify(result.auth))
            Navigate("/profile")
        }
        else{
            alert("Please Enter Correct Details")
        }
    }
    return(
        <div className="main-login">
             <h1 className='login'>Login</h1>
           <input type="text" className="logininputbox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
           <input type="password" className="logininputbox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value) }value={password} required/>
           <button onClick={handleLogin} className="login-btn" type="button">Login</button>
        </div>
    )
}
export default Login;