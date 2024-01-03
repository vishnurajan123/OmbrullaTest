import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getAllUsersApi } from '../Services/allAPI';
import User from './User';

function Home() {
    const [users,setUsers]=useState([])
    

    const getAllUsers=async()=>{
        const {data}=await getAllUsersApi();
        setUsers(data)
    }


    useEffect(()=>{
        getAllUsers()
    },[])

    console.log(users);

  return (
    <>
    <Header/>
    {
                users?.length>0?
                users.map(user=>(
<div className='d-flex justify-content-center align-items-center'>
    
                        <User user={user} />
</div>

                ))
                :<div className='d-flex justify-content-center align-items-center'><p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p></div>

            }



    
    </>
  )
}

export default Home