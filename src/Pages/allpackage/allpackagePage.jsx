import React from 'react'
// import './allpackage.css'
import Home from '../home/Home'
import Package1 from '../../Components/packae/PackageEdit'

const Allpackages = () => {
  return (
      <Home one={"blue"} name={"All packages"} props={<Package1 />}/>
  )
}

export default Allpackages