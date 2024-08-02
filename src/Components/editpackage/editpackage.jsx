import React, { useState } from 'react'
import './editpackage.css'
import { IoMdArrowRoundBack } from "react-icons/io";

const EditPackageCont = ({close}) => {
    // const [closeData, setCloseData] = useState(close)
    const handleClose = () => {
        close(false)
    }
  return (
    <div className='editPackageparent'>
        <div className="closepack">
            <div onClick={handleClose}>
                <IoMdArrowRoundBack />
            </div>
            <p>Edit </p>
        </div>
        <div className='newpackageparent'>
      <div className="newpackageHold">
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Shipping Date</p>
            <input type="date" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders name</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders phone number</p>
            <input type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders address</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers name</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers phone number</p>
            <input type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers email</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers address(street)</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers city</p>
            <input type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers postal/zipcode</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers country</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Complete description of content</p>
            <input type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Dimensions</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Shipment status</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Present shipping condition</p>
            <input type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Tracking id</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel code</p>
            <input type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel expected date</p>
            <input type="date" />
          </div>
        </div>
        <div className="buttonHold">
          <button>save</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditPackageCont