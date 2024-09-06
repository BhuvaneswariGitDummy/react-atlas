import React,{useState, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import './user.css'
import {Link} from 'react-router-dom'

const User = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
    const response = await axios.get('http://localhost:8080/api/getall')
    setUsers(response.data)
    }
    fetchData()
  },[])

  const deleteUser = async(userId) =>{
    await axios.delete(`http://localhost:8080/api/delete/${userId}`)
    .then((res)=>{
      setUsers((prevUser)=>{
        prevUser.filter((user)=>user._id!==userId)
      })
      toast.success(res.data.msg)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className='userTable'>
      <Link to={'/add'} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
                {
                    users.map((user, index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteUser(user._id)}>
                                  <i className="fa-solid fa-trash"></i></button>
                                <Link to={`/update/`+user._id}>
                                <i className="fa-solid fa-pen-to-square"></i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
      </table>
    </div>
  )
}

export default User