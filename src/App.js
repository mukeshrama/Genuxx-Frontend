import './App.css';
import Home from './Component/Home'
import SignUp from './Component/SignUp'
import Login from './Component/login'
import Profile from './Component/Profile'
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import ResetPassword from './Component/ResetPassword';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/> }/>
                        <Route  path='/signup' element={<SignUp/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/reset' element={<ResetPassword/>}/>
                    </Routes>    
        </BrowserRouter>
    </div>
  );
}

export default App;
