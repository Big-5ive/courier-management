import React, { useEffect, useState } from 'react'
import './package.css'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import EditPackageCont from '../editpackage/changePackage';
import PackageDetail from '../packagedetail/packagedetailcomp';
import DeletePackagecont from '../deletecomp/Deletepackaging';
import axios from 'axios';

const Package1 = () => {
    const [editPackage, setEditPackage] = useState(false)
    const [deleteOption, setDeleteOption] = useState(false)
    const [packageDetail, setPackageDetail] = useState(false)
    const [allPackage, setAllpackage] = useState([])
    const [loading, setLoading] = useState(false)
    const [singlePackage, setSinglePackage] = useState()
    const [editId, setEditId] = useState()
    const [deleteId, setDeleteId] = useState()

    const handleEditPackage = (value) => {
        setEditPackage(value)
    }
    const handleEditId = (e) => {
        setEditPackage(true)
        setEditId(e)
    }
    const handleDeleteId = (e) => {
        setDeleteOption(true)
        setDeleteId(e)
    }

    const handleShowDetail = (e) => {
        setPackageDetail(true)
        setSinglePackage(e)
    }
    const handlePackageDetail = (value) => {
        // setEditValue(value)
        setPackageDetail(value)
    }
    const handleDeletePackage = (value) => {
        // setEditValue(value)
        setDeleteOption(value)
    }
    useEffect(() => {
        const url = " https://asianpacificexpress-api.onrender.com/view-all-package"
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
            const incommingData = (response?.data.data)
            const newdata = [...incommingData].reverse()
            setAllpackage(newdata)

            setLoading(false)
          } catch (error) {
            // console.log(error);
            setLoading(false)
          }
        };
    
        fetchData();
      }, []);

    //   const newPackage = [...allPackage]?.reverse()
    //   console.log("pack",allPackage)
  return (
    <div className='packageParent'>
        <div className="allpackagehold">
            <div className='xyzd'>All Available Packages</div>
            {
                editPackage ? 
                <div className="editpackageholder">
                    <EditPackageCont pacid={editId} close={handleEditPackage}/>
                </div> : 
                packageDetail ? 
                <div className="editpackageholder">
                    <PackageDetail single={singlePackage} detail={handlePackageDetail} />
                 </div> :
                 deleteOption ? 
                 <div className="editpackageholder">
                    <DeletePackagecont chip={deleteId} close={handleDeletePackage} />
                 </div> :
                (
                    loading? <div>Fetching data ... pls wait</div>:
                    allPackage?.length === 0 ? <div>No data available, try adding packages</div>:
                    allPackage?.map((e, index) => (
                        <div key={index} className="packageHold">
                <div className="number">
                    <h1>{index + 1}</h1>
                </div>
                <div className="packagesmidetail" onClick={()=> handleShowDetail(e)}>
                    <div className='recexx'>
                        <h1>Sender: <span>{e.sendersName}</span></h1>
                        <h1>Receiver: <span>{e.receiversName}</span></h1>
                    </div>
                    <h1 className='namepack'>Shipment Status: <span>{e.shipmentStatus}</span></h1>
                </div>
                <div className="action">
                    <div className='actionbutt' onClick={()=>handleEditId(e) }><FaRegEdit /></div>
                    <div className='actionbutt' onClick={()=>handleDeleteId(e.packageId) }><MdOutlineDelete /></div>
                </div>
            </div>
                    ))
                )
                
            }
            
        </div>
    </div>
  )
}

export default Package1