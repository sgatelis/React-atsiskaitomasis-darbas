import React, { useContext } from 'react'
import mainContext from '../context/mainContext'
import { useNavigate } from 'react-router-dom'
import UserCard from '../components/UserCard'

const AllUsers = () => {

  const {users} = useContext(mainContext)

  return (
    <div>
      {users.map((x, i) => <UserCard user={x} index={i} key={i} />)}
    </div>
  )
}

export default AllUsers
