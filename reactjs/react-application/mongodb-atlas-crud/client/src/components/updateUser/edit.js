import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import '../addUser/add.css'
import toast from 'react-hot-toast';

const Edit = () => {

 const {id} = useParams();
 const navigate = useNavigate();
 const [fname,setFname] = useState()
 const [lname,setLname] = useState()
 const [email,setEmail] = useState()

 useEffect(()=>{
    axios.get(`http://localhost:8080/api/getone/${id}`)
    .then((response)=>{
        console.log(response.data)
        setFname(response.data.fname)
        setLname(response.data.lname)
        setEmail(response.data.email)
        //console.log(fname)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`,{fname,lname,email})
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" value={fname} 
                onChange={(e)=>setFname(e.target.value)} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" value={lname} 
                onChange={(e)=>setLname(e.target.value)} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit