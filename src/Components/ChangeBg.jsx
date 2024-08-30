import React,{useState} from 'react'

const ChangeBg = () => {
    const [value,setValue]=useState("")
    function handlechange(e){
        setValue(e.target.value)
    }

  return (
    <div>
      <h3 style={{color:value}}>changebg</h3>
      <input value={value} onChange={handlechange}  />
    </div>
  )
}

export default ChangeBg
