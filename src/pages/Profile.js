import {useContext, useRef, useState} from 'react'
import mainContext from '../context/mainContext'

const Profile = () => {

  const {users, setUsers, loginUsers,setLoginUsers, getShowError, setShowError} = useContext(mainContext)

  const [changeImage, setChangeImage] = useState(false)

  const newImgRef = useRef()
  const password1Ref = useRef()
  const password2Ref = useRef()

  function changeUser() {
    const user = {
      photo: newImgRef.current.value,
      username: users[0].username,
      password: password1Ref.current.value,
      message: []
    }

    const validatePassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/);

    if (user.username.length < 4 || user.username.length > 20) return setShowError("username is bad")
    if (user.pass1.length < 4 || user.pass1.length > 20) return setShowError("password is to short or big")
    if (user.pass1 !== user.pass2) return setShowError("passwords not same")

    if (!validatePassword.test(user.pass1)) return setShowError("password is bad")

    const myUser = users.find(x => x.username === user.username);

    if (myUser) return setShowError("This username exist")
       
    setUsers([...users, user])
    setChangeImage(true)     
    console.log(users);
    console.log(user);
  }

  return (
    <div>

        <div className='profile-change'>
          {!changeImage ? <img src={users[0].photo} alt="standart"/> : <img src={users[0].photo} alt="new"/>}
          <input ref={newImgRef} type="text" placeholder="user profile change"/>
          <button onClick={changeUser}>Change Image</button>
        </div>
      
        <p>{users[0].username}</p>

        <div className='input-change'>
          <input ref={password1Ref} type="text" placeholder="password change"/>
          <input ref={password2Ref} type="text" placeholder="password change"/>
          <button onClick={changeUser}>Change password</button>
        </div>
      {getShowError && <p>{getShowError}</p>} 
    </div>
  )
}

export default Profile
