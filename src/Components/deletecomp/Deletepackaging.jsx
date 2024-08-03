import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import './deletepackage.css'
import axios from 'axios';
import toast from 'react-hot-toast';

const DeletePackagecont = ({close, chip}) => {
    const [loading, setLoading] = useState(false)
    const handleClose = () => {
        close(false)
    }

    const handleDelete = async(e) => {
        setLoading(true)
        e.preventDefault()
        // const id = delId.packageId
        const url = `https://asianpacificexpress-api.onrender.com/delete-package/${chip}`
        const admin = JSON.parse(localStorage.getItem("admindata"))
        const token = admin.token
        const headers = {
          'Authorization' : `Bearer ${token}`
        }

        try {
          const response = await axios.delete(url,{ headers });
        //   console.log('Response:', response.data);
          toast.success("package deleted successfully")
          setLoading(false)
          handleClose()
        } catch (error) {
          console.error('Error:', error);
          // console.error('id:', id);
          setLoading(false)
          toast.error(error.response.data.message)
          // console.log("token", token)
        }
      }
  return (
    <div className='deletepopparent'>
        <div className="deletealert">
            <div className="closepack">
                <div onClick={handleClose}>
                    <IoMdArrowRoundBack />
                </div>
                <p>Delete</p>
            </div>
            <div className="alertcomnt">
                <div className="alerthold">
                    <p>Are you sure you want to delete this package?</p>
                    <div className="alertholdbutton">
                        <button onClick={handleClose} id='nott'>NO</button>
                        <button onClick={handleDelete}>
                            {
                                loading ? "deleting..." : "Yes"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePackagecont