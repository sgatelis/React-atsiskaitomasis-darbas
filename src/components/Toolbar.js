import { Link } from "react-router-dom";
import mainContext from "../context/mainContext";
import { useContext } from "react";

const Toolbar = () => {
    
    const {showToolbar} = useContext(mainContext)
    console.log(showToolbar);
    

    return (
        <div className="toolbar d-flex" >
            {!showToolbar ?
                <div className='login'>
                    <Link to="/">Register</Link>
                    <Link to="/Login">Login</Link>
                </div> :
                <div className='posts'>
                    <Link to="/Profile">Profile</Link>
                    <Link to="/AllUsers">All Users</Link>
                    <Link to="/Conversations">Conversations</Link>
                   
                </div>
            } 
            
        </div>
    );
};

export default Toolbar;