import {useState, useRef, useContext,  useEffect} from 'react'
import mainContext from '../context/mainContext'
import { useSelector, useDispatch } from 'react-redux'
import {addUser} from "../features/users"
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const {users, setUsers} = useContext(mainContext)

    const usernameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()
    

    const dispatch = useDispatch()
    
    const [getShowError, setShowError] = useState(false)
    const nav = useNavigate()

    function create() {
        const user = {
            photo: "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Whatsapp-Profile-Pic-Photo-9.jpg",
            username: usernameRef.current.value,
            pass1: pass1Ref.current.value,
            pass2: pass2Ref.current.value,
            id: Date.now()
        }

        const validatePassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/);
    
        if(user.username.length < 4 || user.username.length > 20) return setShowError("username is bad")
        if (user.pass1.length < 4 || user.pass1.length >20)return setShowError("password is to short or big")
        if(user.pass1 !== user.pass2)return setShowError("passwords not same")

        if(!validatePassword.test(user.pass1)) return setShowError("password is bad")

        const myUser = users.find(x => x.username === user.username);

        if(myUser) return setShowError("This username exist")

        setUsers([...users, user])          
        
        nav("/login")
        
    }

   return (
        <div className='inputForm d-flex j-center'>
            <input ref={usernameRef} type="text" placeholder='username 4...20 symbols' autoComplete='on' />
            <input ref={pass1Ref} type="text" placeholder='password1 4...20 symbols include special' autoComplete='on' />
            <input ref={pass2Ref} type="text" placeholder='password2' autoComplete='on' />
            <button onClick={create}>Register</button>
            {getShowError && <p>{getShowError}</p>}
            
           
        </div>
    )
  }

export default Register
