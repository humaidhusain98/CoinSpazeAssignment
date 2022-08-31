import React from 'react'
import { TextField } from '@mui/material'

export default function ToAddressFieldMobile({toAddress,setToAddress}) {

  const onChangeToAddress = (event) => {
    if (event.target.value) {
      setToAddress(event.target.value);
    } else {
      setToAddress(null);
    }
  };

  const handleClickToAddress=()=>{
    if(!toAddress || toAddress==='initialValue'){
      setToAddress(null);
    }
  }

  return (
    <>
    <div className="label ml15">To Address <span className="red">*</span></div>
    <div className="text-field-cont ml15">
      <TextField 
      id="outlined-basic" 
      style={{width: 280}} 
      label="E.g- '0x3f6...4gt4d88'"
      size="small" 
      variant="outlined" 
      value={toAddress==="initialValue"?"":toAddress}   
      error={toAddress===null?true:false}
      onChange={onChangeToAddress}
      autoComplete="off"
      onClick={handleClickToAddress} 
      />
    </div>
    </>
  )
}
