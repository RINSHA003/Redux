import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const color=useSelector(state=>state.color.value)
  return (
    <div>
      <h1 style={{color}}>redux</h1>
      <h3></h3>
    </div>
  )
}

export default Header

