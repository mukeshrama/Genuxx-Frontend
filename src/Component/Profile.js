import { useEffect,useState } from "react";
import "../App.css"
import { useNavigate } from 'react-router-dom';
import Details from './Details'
export default function Profile(){
    let user=localStorage.getItem("user")
    const Navigate=useNavigate();
    console.log(user);
    const [details,setDetails]=useState(true);
    useEffect(()=>{
        if(user==null)
        {
            Navigate('/');
        }
    },[])

    return(<>
        <div className="profile-container">
            <h3 className="profile-h3">User Home Page</h3>
                <div className="display-container">
                   { 
                   details?
                    <button className="profile-btn" onClick={()=>{setDetails(false)}}>DN</button>
                    :<Details/> 
                    }
                </div>
        </div>
    </>)
}