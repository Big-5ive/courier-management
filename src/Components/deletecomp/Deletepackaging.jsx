import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import './deletepackage.css'

const DeletePackagecont = ({close}) => {
    const handleClose = () => {
        close(false)
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
                        <button>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePackagecont