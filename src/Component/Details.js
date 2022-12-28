import { useNavigate } from "react-router-dom"
import '../App.css'
    export default function Deatils()
    {
        const Navigate=useNavigate();
        const user=JSON.parse(localStorage.getItem("user"))
        console.log(typeof user)
        const logout=()=>{
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            Navigate('/login')
        }
        const reset=()=>{
            Navigate('/reset')
        }
        return(
            <div className="detail-container">
                <div>
                    <h2>Display Name</h2>
                    <h3>{user.person.display_name}</h3>
                </div>
                <div>
                    <h2>Account Age</h2>
                    <h3>{user.person.created_at}</h3>
                </div>
                <div>
                    <h2>Security</h2>
                    <h2>LastUpdated</h2>
                    <h3>{user.person.updated_at}</h3>
                </div>
                <div>
                    <button className='Reset-button'onClick={reset}>Reset Password</button>
                    <button className="logout-btn" onClick={logout}>Logout</button>
                </div>
            </div>
        )
    }