import React from 'react'
import './createPackage.css'
import Home from '../home/Home'
import NewPackage from '../../Components/newPackage/newpackagecomp'

const CreatePackage = () => {
  return (
    <Home props={<NewPackage />} two={"blue"}/>
  )
}

export default CreatePackage