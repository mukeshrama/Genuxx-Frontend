import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"
const SignUp=()=>{
    const [display_name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [created_at,setCreated_at]=useState(new Date().toLocaleString());
    console.log(created_at);
    const [updated_at,setUpdated_at]=useState(new Date().toLocaleString());
    const role={
        "key":"user",
        "rank":1
    }
    const Navigate=useNavigate();
    const key="LXVNQT";
    const collectData=async ()=>{
        if(display_name!=="" && email!=='' && password!=='')
        { 
            let result= await fetch('https://genux-backendproject.onrender.com/register',{
                method:'post',
                body:JSON.stringify({display_name,email,password,created_at,updated_at,role,key}),
                headers:{
                    'content-type':'application/json'
                }
            });
            result=await result.json();
            let val={"person":result.result.person};
            localStorage.setItem("user",JSON.stringify(val))
            localStorage.setItem("token",JSON.stringify(result.result.authentication_token))
            console.log(localStorage.getItem("user"));
            if(localStorage.getItem("user")!=='undefined'){
                alert("you have Successfully Created your account")
                Navigate('/profile')
            }
         }
    
}
    return(
        <>
             <div class="main-signup">
                <h1 className='regi'>Register</h1>
                <input className='inputbox' type="text" value={display_name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>
                <input className='inputbox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                <input className="inputbox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
                <button className="btn" onClick={collectData} type="button">Sign Up</button>
            </div>
        </>
       
    )
   
}
export default SignUp;