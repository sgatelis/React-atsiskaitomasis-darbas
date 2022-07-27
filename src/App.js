import {useState} from 'react';
import './App.css';
import mainContext from './context/mainContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AllUsers from './pages/AllUsers';
import Toolbar from './components/Toolbar';
import ParticularUserProfile from './pages/ParticularUserProfile';
import Conversations from './pages/Conversations';



function App() {

   const [users, setUsers] = useState([])
   const [messages, setMessages] = useState([])
   const [showToolbar, setShowToolbar] = useState(false)
   const [loginUsers, setLoginUsers] = useState([])

   const values = {
    users,
    setUsers, 
    messages, 
    setMessages, 
    showToolbar,
    setShowToolbar,
    loginUsers,
    setLoginUsers
   }

    return (
      
    <mainContext.Provider value={values} >
            <div className="App">
            
                <BrowserRouter>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={<Register/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/AllUsers" element={<AllUsers/>}/>
                        <Route path="/user/:id" element={<ParticularUserProfile/>}/>
                        <Route path="/Conversations" element={<Conversations/>}/>
                        
                    </Routes>
                </BrowserRouter>
                
            </div>

       </mainContext.Provider>
    );
}

export default App;


