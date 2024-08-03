import React from 'react'
import './packagedetail.css'
import { IoMdArrowRoundBack } from "react-icons/io";

const PackageDetail = ({detail, single }) => {
    const handleClose = () => {
        detail(false)
    }
  return (
    <div className='packagedetailparent'>
        <div className="closepack">
            <div onClick={handleClose}>
                <IoMdArrowRoundBack />
            </div>
            <h1 style={{fontSize: "18px", color: "orangered"}}>Package detail</h1>
        </div>
        <div className="detailbody">
            <div className="detailbodyinfo">
                <div>
                    <h1>Shipping date</h1>
                    <p>{single.shippingDate}</p>
                </div>
                <div>
                    <h1>Senders name</h1>
                    <p>{single.sendersName}</p>
                </div>
                <div>
                    <h1>Senders phone number</h1>
                    <p>{single.sendersPhoneNumber}</p>
                </div>
                <div>
                    <h1>Senders address</h1>
                    <p>{single.sendersAddress}</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Receivers Name</h1>
                    <p>{single.receiversName}</p>
                </div>
                <div>
                    <h1>Receivers Phone number</h1>
                    <p>{single.receiversPhoneNumber}</p>
                </div>
                <div>
                    <h1>Receivers email</h1>
                    <p>{single.receiversEmail}</p>
                </div>
                <div>
                    <h1>Receivers address(street)</h1>
                    <p>{single.sendersAddress}</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Receivers city</h1>
                    <p>{single.receiversCity}</p>
                </div>
                <div>
                    <h1>Receivers Postal/zip code</h1>
                    <p>{single.receiversPostalCode}</p>
                </div>
                <div>
                    <h1>Receivers country</h1>
                    <p>{single.receiversCountry}</p>
                </div>
                <div>
                    <h1>Complete description of content</h1>
                    <p>{single.description}</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Dimensions</h1>
                    <p>{single.dimensions}</p>
                </div>
                <div>
                    <h1>Shipment status</h1>
                    <p>{single.shipmentStatus}</p>
                </div>
                <div>
                    <h1>Present shipping condition</h1>
                    <p>{single.shippingCondition}</p>
                </div>
                <div>
                    <h1>Tracking id</h1>
                    <p>{single.trackingId}</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Parcel code</h1>
                    <p>{single.parcelCode}</p>
                </div>
                <div>
                    <h1>Parcel expected date</h1>
                    <p>{single.shippingDate}</p>
                </div>
                {/* <div>
                    <h1>Present shipping condition</h1>
                    <p>moving smoothly</p>
                </div>
                <div>
                    <h1>Tracking id</h1>
                    <p>110avf45zx</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default PackageDetail