import React from 'react'
import './packagedetail.css'
import { IoMdArrowRoundBack } from "react-icons/io";

const PackageDetail = ({detail}) => {
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
                    <p>01/07/2024</p>
                </div>
                <div>
                    <h1>Senders name</h1>
                    <p>Ekele Jeremiah</p>
                </div>
                <div>
                    <h1>Senders phone number</h1>
                    <p>1234567890</p>
                </div>
                <div>
                    <h1>Senders address</h1>
                    <p>01/07/2024</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Receivers Name</h1>
                    <p>Thompson Peters</p>
                </div>
                <div>
                    <h1>Receivers Phone number</h1>
                    <p>+333 4567 3424 56</p>
                </div>
                <div>
                    <h1>Receivers email</h1>
                    <p>peters@gmail.com</p>
                </div>
                <div>
                    <h1>Receivers address(street)</h1>
                    <p>church ville</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Receivers city</h1>
                    <p>Millan</p>
                </div>
                <div>
                    <h1>Receivers Postal/zip code</h1>
                    <p>23456</p>
                </div>
                <div>
                    <h1>Receivers country</h1>
                    <p>New zealand</p>
                </div>
                <div>
                    <h1>Complete description of content</h1>
                    <p>fully functional 3 horse power Ac</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Dimensions</h1>
                    <p>width: 500cm bredth: 500cm</p>
                </div>
                <div>
                    <h1>Shipment status</h1>
                    <p>on transit</p>
                </div>
                <div>
                    <h1>Present shipping condition</h1>
                    <p>moving smoothly</p>
                </div>
                <div>
                    <h1>Tracking id</h1>
                    <p>110avf45zx</p>
                </div>
            </div>
            <div className="detailbodyinfo">
                <div>
                    <h1>Parcel code</h1>
                    <p>2345678</p>
                </div>
                <div>
                    <h1>Parcel expected date</h1>
                    <p>5/8/2024</p>
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