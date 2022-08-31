import React from 'react'
import { TextField } from '@mui/material';

export default function ToAddressFieldDesktop({toAddress,setToAddress}) {
  

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
    <div className="label">To Address <span className="red">*</span></div>
    <div className="text-field-cont">
      <TextField 
      id="outlined-basic" 
      onClick={handleClickToAddress} 
      value={toAddress==="initialValue"?"":toAddress}   
      error={toAddress===null?true:false}
      onChange={onChangeToAddress}
      autoComplete="off"
      style={{width: 500}} 
      label="E.g- '0x3f6...4gt4d88'" 
      variant="outlined"
      />
    </div>
    </>
  )
}
