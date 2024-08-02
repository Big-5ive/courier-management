import React, { useState } from 'react'
import './package.css'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import EditPackageCont from '../editpackage/changePackage';
import PackageDetail from '../packagedetail/packagedetailcomp';
import DeletePackagecont from '../deletecomp/Deletepackage';

const Package1 = () => {
    const [editPackage, setEditPackage] = useState(false)
    // const [editValue, setEditValue] = useState ("")
    const [deleteOption, setDeleteOption] = useState(false)
    const [packageDetail, setPackageDetail] = useState(false)

    const handleEditPackage = (value) => {
        // setEditValue(value)
        setEditPackage(value)
    }
    const handlePackageDetail = (value) => {
        // setEditValue(value)
        setPackageDetail(value)
    }
    const handleDeletePackage = (value) => {
        // setEditValue(value)
        setDeleteOption(value)
    }
  return (
    <div className='packageParent'>
        <div className="allpackagehold">
            {
                editPackage ? 
                <div className="editpackageholder">
                    <EditPackageCont close={handleEditPackage}/>
                </div> : 
                packageDetail ? 
                <div className="editpackageholder">
                    <PackageDetail detail={handlePackageDetail} />
                 </div> :
                 deleteOption ? 
                 <div className="editpackageholder">
                    <DeletePackagecont close={handleDeletePackage} />
                 </div> :
                <div className="packageHold">
                <div className="number">
                    <h1>1</h1>
                </div>
                <div className="packagesmidetail" onClick={()=> setPackageDetail(true)}>
                    <div className='recexx'>
                        <h1>Receiver: <span>Ekele Jeremiah</span></h1>
                        <h1>Package status: <span>in progress...</span></h1>
                    </div>
                    <h1 className='namepack'>Package name: <span>34 karat of gold</span></h1>
                </div>
                <div className="action">
                    <div className='actionbutt' onClick={()=> setEditPackage(true)}><FaRegEdit /></div>
                    <div className='actionbutt' onClick={()=> setDeleteOption(true)}><MdOutlineDelete /></div>
                </div>
            </div>
                
            }
            
        </div>
    </div>
  )
}

export default Package1