import React from 'react'
import './createPackage.css'
import Home from '../home/Home'
import NewPackage from '../../components/newPackage/newpackage'

const CreatePackage = () => {
  return (
    <Home props={<NewPackage />} two={"blue"}/>
  )
}

export default CreatePackage