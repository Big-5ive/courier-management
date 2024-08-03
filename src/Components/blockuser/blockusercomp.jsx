import React, { useEffect, useState } from 'react'
import './blockuser.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { TfiReload } from "react-icons/tfi";

const BlockUserCont = () => {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [allUsers, setAllUsers] = useState()
    const [userId, setUserId] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        const url = " https://asianpacificexpress-api.onrender.com/view-all-users"
        const admin = JSON.parse(localStorage.getItem("admindata"))
        const token = admin.token
        const headers = {
        'Authorization' : `Bearer ${token}`
        }
        const fetchData = async () => {
            setLoading(true)
          try {
            const response = await axios.get(url, { headers });
            // setData(response.data);
            // console.log(response)
            setAllUsers(response?.data.data)
            setLoading(false)
          } catch (error) {
            console.log(error);
            setLoading(false)
          }
        };
    
        fetchData();
      }, []);

      const handleUpdate = async(e) => {
        setLoading2(true)
        // if(!userId){
        //     setLoading2(false)
        //     toast.error("pls select a user")
        // } else{
        e.preventDefault()
        // const id = pacid.packageId
        const url = `https://asianpacificexpress-api.onrender.com/admin-status/${userId}`
        const admin = JSON.parse(localStorage.getItem("admindata"))
        const token = admin.token
        const headers = {
          'Authorization' : `Bearer ${token}`
        }
        const statusData = {
            status: status
        }
  
        try {
          const response = await axios.put(url, statusData, { headers });
        //   console.log('Response:', response.data);
          toast.success("status updated added")
          setLoading2(false)
        } catch (error) {
        //   console.error('Error:', error);
        //   console.error('id:', userId._id);
          setLoading2(false)
          toast.error(error.response.data.message)
          // console.log("token", token)
        }
    // }
      }
  return (
    <div className='blockuserparent'>
        <div className="usercontainer">
            <div className="choseUser">
                <p>Select a user</p>
                
                <select 
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
                name="block" id="block">
                    <option value="">select</option>
                    { 
                    // loading ? <TfiReload />:
                    // allUsers?.length === 0 ? 
                    // <div>There is no user here</div> :
                        allUsers?.map((e,index)=> (
                            <option key={index} value={e._id}>{`${e.firstName} ${e.lastName}`}</option>
                        ))
                    }
                </select>
            </div>
            <div className="choseUser">
                <p>Select the new status</p>
                <select value={status} onChange={(e)=> setStatus(e.target.value)} name="block" id="block">
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                </select>
            </div>
            <div className="blockbutton">
                <button onClick={handleUpdate}>
                    {
                        loading2 ? "loading..." : "Change"
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default BlockUserCont