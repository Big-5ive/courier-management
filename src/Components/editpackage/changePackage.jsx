import React, { useState } from 'react'
import './editpackage.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import toast from 'react-hot-toast';

const EditPackageCont = ({close, pacid, fetchpack}) => {

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

    const handleClose = () => {
        close(false)
    }

    const handleUpdate = async(e) => {
      setLoading(true)
      e.preventDefault()
      const id = pacid.packageId
      const url = `https://asianpacificexpress-api.onrender.com/update-package/${id}`
      const admin = JSON.parse(localStorage.getItem("admindata"))
      const token = admin.token
      const headers = {
        'Authorization' : `Bearer ${token}`
      }

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

      try {
        const response = await axios.put(url, packageData, { headers });
        // console.log('Response:', response.data);
        toast.success("package updated added")
        setLoading(false)
        handleClose()
        fetchpack()
      } catch (error) {
        // console.error('Error:', error);
        // console.error('id:', id);
        setLoading(false)
        toast.error(error.response.data.message)
        // console.log("token", token)
      }
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
            <input 
            placeholder={pacid.shippingDate}
            value={shippingDate}
            onChange={(e)=> setShippingDate(e.target.value)}
            type="date" />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders name</p>
            <input type="text"
            placeholder={pacid.sendersName}
            value={sendersName}
            onChange={(e)=> setSendersName(e.target.value)}
             />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders phone number</p>
            <input type="text" 
            placeholder={pacid.sendersPhoneNumber}
            value={sendersPhone}
            onChange={(e)=> setSendersPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Senders address</p>
            <input type="text" 
            placeholder={pacid.sendersAddress}
            value={sendersAddress}
            onChange={(e)=> setSendersAddress(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers name</p>
            <input type="text" 
            placeholder={pacid.receiversName}
            value={receiversName}
            onChange={(e)=> setReceiversName(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers phone number</p>
            <input type="text" 
            placeholder={pacid.receiversPhoneNumber}
            value={receiversPhone}
            onChange={(e)=> setReceiversPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers email</p>
            <input type="text" 
            placeholder={pacid.receiversEmail}
            value={receiversEmail}
            onChange={(e)=> setReceiversEmail(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers address(street)</p>
            <input type="text" 
            placeholder={pacid.receiversAddress}
            value={receiversStreet}
            onChange={(e)=> setReceiversStreet(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers city</p>
            <input type="text" 
            placeholder={pacid.receiversCity}
            value={receiversCity}
            onChange={(e)=> setReceiversCity(e.target.value)}
            />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers postal/zipcode</p>
            <input type="text" 
            placeholder={pacid.receiversPostalCode}
            value={postalCode}
            onChange={(e)=> setPostalCode(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Receivers country</p>
            <input type="text" 
            placeholder={pacid.receiversCountry}
            value={country}
            onChange={(e)=> setCountry(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Complete description of content</p>
            <input type="text" 
            placeholder={pacid.description}
            value={contentDescription}
            onChange={(e)=> setContentDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Dimensions</p>
            <input type="text" 
            placeholder={pacid.dimensions}
            value={dimensions}
            onChange={(e)=> setDimensions(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Shipment status</p>
            <input type="text" 
            placeholder={pacid.shipmentStatus}
            value={shipmentStatus}
            onChange={(e)=> setShipmentStatus(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Present shipping condition</p>
            <input type="text" 
            placeholder={pacid.shippingCondition}
            value={shipmentCondition}
            onChange={(e)=> setShipmentCondition(e.target.value)}
            />
          </div>
        </div>
        <div className="packageinputHold">
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Tracking id</p>
            <input type="text" 
            placeholder={pacid.trackingId}
            value={trackingId}
            onChange={(e)=> setTrackingId(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel code</p>
            <input type="text" 
            placeholder={pacid.parcelCode}
            value={parcelCode}
            onChange={(e)=> setParcelCode(e.target.value)}
            />
          </div>
          <div className='newpackinput'>
            <p style={{fontWeight: "600"}}>Parcel expected date</p>
            <input type="date" 
            placeholder={pacid.shippingDate}
            value={deliveryDate}
            onChange={(e)=> setDeliveryDate(e.target.value)}
            />
          </div>
        </div>
        <div className="buttonHold">
          <button onClick={handleUpdate}>
            {
              loading ? "Saving..." : "save"
            }
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditPackageCont