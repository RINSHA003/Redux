import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const color=useSelector(state=>state.color.value)
  return (
    <div>
      <p style={{color}}>this is footer</p>
    </div>
  )
}

export default Footer
