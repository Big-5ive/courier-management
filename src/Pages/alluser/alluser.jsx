import React from 'react'
import Home from '../home/Home'
import BlockUserCont from '../../Components/blockuser/blockuser'

const AllUser = () => {
  return (
    <Home three={"blue"} name={"block a user"} props={<BlockUserCont />}/>
  )
}

export default AllUser