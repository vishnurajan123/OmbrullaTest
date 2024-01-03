import React from 'react'
import { Link } from 'react-router-dom';

function User({user}) {
    const deleteUser=(id)=>{
        users.filter(item=>item.id!=id)

    }
    console.log(user);
  return (
    <div className='user'>
  <h3 className='text-center mt-3'>{user.name}</h3>
  <div className='d-flex justify-content-evenly mt-4'>
<Link to={`./userdetails/${user.id}`}>
        <button className='btn btn-info'>Info</button>
    
</Link>    <button onClick={deleteUser(user.id)} className='btn btn-danger'>Delete</button>
  </div>

    </div>
  )
}

export default User