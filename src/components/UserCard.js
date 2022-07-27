import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user, index}) => {

    const nav = useNavigate()

  return (
    <div className='userCard' onClick={() => (nav("/user/" + index))}>
      <img src={user.photo} alt=""/>
      <h3>{user.username}</h3>
    </div>
  )
}

export default UserCard
