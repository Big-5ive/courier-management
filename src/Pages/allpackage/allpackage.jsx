import React from 'react'
// import './allpackage.css'
import Home from '../home/Home'
import Package from '../../components/packae/package'

const Allpackages = () => {
  return (
      <Home one={"blue"} name={"All packages"} props={<Package />}/>
  )
}

export default Allpackages