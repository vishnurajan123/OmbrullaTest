import React, { useEffect, useState } from 'react'
import { getAllUsersApi } from '../Services/allAPI';
import { useParams } from 'react-router-dom';
import Header from './Header';

function UserDetails() {
    const {id}=useParams()
    const [users,setUsers]=useState({})

    const getAllUsers=async()=>{
        const {data}=await getAllUsersApi();
        setUsers(data.find(item=>item.id==id))
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    console.log(users);

  return (
    <>
    <Header/>
    <div className=''>
        {/* <h1>{users?.name}</h1>

        <table>
            <tr>
                <td>Username : </td>
                <td>{users?.username}</td>
            </tr>
            <tr>
                <td>Email : </td>
                <td>{users?.email}</td>
            </tr>
            <tr>
                <td>Company : </td>
                <td>{users?.company.name}</td>
            </tr>
           
        </table> */}
        <h1>{users?.name}</h1>
        <div>

            <div className='d-flex'>
                <p>Email : </p>
                <p>{users?.email}</p>
            </div>
            <div className='d-flex'>
                <p>Address : </p>
               <div>
                    
                    <p>{users?.address?.city}</p>
                    <p>{users?.address?.street}</p>
                    <p>{users?.address?.zipcode}</p>
               </div>
            </div>
            <div className='d-flex'>
                <p>Company : </p>
                <p>{users?.company?.name}</p>
            </div>
            <div className='d-flex'>
                <p>Phone : </p>
                <p>{users?.phone}</p>
            </div>
            <div className='d-flex'>
                <p>Website : </p>
                <p>{users?.website}</p>
            </div>
        </div>

    </div>



    </>
  )
}

export default UserDetails