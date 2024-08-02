import React, { useState } from 'react'
import './blockuser.css'

const BlockUserCont = () => {
    const [block, setBlock] = useState(false)
    // const [unBlock, setUnBlock] = useState(false)

    const handleBlock = () => {
        setBlock(true)
        // setUnBlock(false)
    }

    const handleUnBlock = () => {
        // setUnBlock(true)
        setBlock(false)
    }
  return (
    <div className='blockuserparent'>
        <div className="usercontainer">
            <div className="choseUser">
                <p>Select a user</p>
                <select name="block" id="block">
                    <option value="active">Ekele Jeremiah</option>
                    <option value="disabled">John Doe</option>
                </select>
            </div>
            <div className="choseUser">
                <p>Select the new status</p>
                <select name="block" id="block">
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                </select>
            </div>
            <div className="blockbutton">
                <button>Change</button>
            </div>
        </div>
    </div>
  )
}

export default BlockUserCont