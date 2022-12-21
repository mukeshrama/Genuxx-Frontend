import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ResetPassword(){
    const Navigate=useNavigate();
    const [email,setEmail]=useState();
    const resetpassword=async ()=>{
            let result=await fetch('https://genux-backendproject.onrender.com/reset',{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'content-type':'application/json'
            }
           
        });
        result=await result.json();
        alert(result.msg)
        if(result.msg==='We have sent you a password reset link to your email!')
        {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            Navigate('/login')
        }
        
    }
    return (
        <div className="main-login">
            <h1 className='login'>Reset</h1>
            <input type="text" className="logininputbox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            <button className='login-btn' onClick={resetpassword}>Reset Password</button>
        </div>
    )
}