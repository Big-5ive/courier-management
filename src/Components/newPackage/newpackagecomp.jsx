import React, { useEffect, useState } from 'react'
import './newpackage.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const NewPackage = () => {
  const [shippingDate, setShippingDate] = useState("")
  const [sendersName, setSendersName] = useState("")
  const [sendersPhone, setSendersPhone] = useState("")
  const [sendersAddress, setSendersAddress] = useState("")
  const [receiversName, setReceiversName] = useState("")
  const [receiversPhone, setReceiversPhone] = useState("")
  const [receiversEmail, setReceiversEmail] = useState("")
  const [receiversStreet, setReceiversStreet] = useState("")
  const [receiversCity, setReceiversCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")
  const [contentDescription, setContentDescription] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [shipmentStatus, setShipmentStatus] = useState("")
  const [shipmentCondition, setShipmentCondition] = useState("")
  const [trackingId, setTrackingId] = useState("")
  const [parcelCode, setParcelCode] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [loading, setLoading] = useState(false)
 
  const nav = useNavigate()

  const handleCreatePackage = async(e) => {
    e.preventDefault()
    setLoading(true)
    const url = "https://asianpacificexpress-api.onrender.com/add-package"

    const packageData = {
      shippingDate: shippingDate,
      sendersName: sendersName,
      sendersPhoneNumber: sendersPhone,
      sendersAddress: sendersAddress,
      receiversName: receiversName,
      receiversPhoneNumber: receiversPhone,
      receiversEmail: receiversEmail,
      receiversAddress: receiversStreet,
      receiversCity: receiversCity,
      receiversPostalCode: postalCode,
      receiversCountry: country,
      description: contentDescription,
      dimensions: dimensions,
      shipmentStatus: shipmentStatus,
      shippingCondition: shipmentCondition,
      trackingId: trackingId,
      parcelCode: parcelCode,
      parcelExpectedDate: deliveryDate,
    }

    const admin = JSON.parse(localStorage.getItem("admindata"))
    const token = admin.token
    const headers = {
      'Authorization' : `Bearer ${token}`
    }

    try {
      const response = await axios.post(url, packageData, { headers });
      // console.log('Response:', response.data);
      toast.success("package successfully added")
      setLoading(false)
      setTimeout(()=>{
        nav("/allpackage")
      }, 3000)
      
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
      toast.error(error.response.data.message)
      // console.log("token", token)
    }
  }

  return (
    <form action="" onSubmit={handleCreatePackage}>
    <div className='newpackageparent'>
      <div className="title">
        <p style={{fontFamily: "Poppins"}}>create a new package</p>
      </div>
      <div className="newpackageHold">
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Shipping Date</p>
            <input 
              required
              value={shippingDate}
              onChange={(e)=> setShippingDate(e.target.value)}
              type="date"
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders fullName</p>
            <input 
            required
            value={sendersName}
            onChange={(e)=> setSendersName(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders phone number</p>
            <input 
            required
            value={sendersPhone}
            onChange={(e)=> setSendersPhone(e.target.value)}
            type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders address</p>
            <input 
            required
            value={sendersAddress}
            onChange={(e)=> setSendersAddress(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers FullName</p>
            <input 
            required
            value={receiversName}
            onChange={(e)=> setReceiversName(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers phone number</p>
            <input 
            required
            value={receiversPhone}
            onChange={(e)=> setReceiversPhone(e.target.value)}
            type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers email</p>
            <input 
            required
            value={receiversEmail}
            onChange={(e)=> setReceiversEmail(e.target.value)}
            type="email" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers address(street)</p>
            <input 
            required
            value={receiversStreet}
            onChange={(e)=> setReceiversStreet(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers city</p>
            <input 
            required
            value={receiversCity}
            onChange={(e)=> setReceiversCity(e.target.value)}
            type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers postal/zipcode</p>
            <input 
            required
            value={postalCode}
            onChange={(e)=> setPostalCode(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers country</p>
            <input 
            required
            value={country}
            onChange={(e)=> setCountry(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Complete description of content</p>
            <input 
            required
            value={contentDescription}
            onChange={(e)=> setContentDescription(e.target.value)}
            type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Dimensions</p>
            <input 
            required
            placeholder='eg lenght and breadth of the package'
            value={dimensions}
            onChange={(e)=> setDimensions(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Shipment status</p>
            <input 
            required
            placeholder='eg onhold, intransit, processing e.t.c'
            value={shipmentStatus}
            onChange={(e)=> setShipmentStatus(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Present shipping condition</p>
            <input 
            required
            placeholder='eg cancelled, postponed e.t.c'
            value={shipmentCondition}
            onChange={(e)=> setShipmentCondition(e.target.value)}
            type="text" />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Tracking id</p>
            <input 
            required
            value={trackingId}
            onChange={(e)=> setTrackingId(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel code</p>
            <input 
            required
            value={parcelCode}
            onChange={(e)=> setParcelCode(e.target.value)}
            type="text" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel expected date</p>
            <input 
            required
            value={deliveryDate}
            onChange={(e)=> setDeliveryDate(e.target.value)}
            type="date" />
          </div>
        </div>
        <div className="buttonHold">
          <button>
            {
              loading ? "Sending...": "send"
            }
          </button>
        </div>
      </div>
    </div>
    </form>
  )
}

export default NewPackage