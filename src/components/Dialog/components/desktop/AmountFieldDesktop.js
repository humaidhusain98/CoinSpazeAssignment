import React from 'react'
import { TextField } from '@mui/material';

export default function AmountFieldDesktop({amount,setAmount}) {

  const onChangeAmount = (event) => {
    if (event.target.value) {
      setAmount(event.target.value);
    } else {
      setAmount(null);
    }
  };
  const handleClickToAmount=()=>{
    if(!amount || amount==='initialValue'){
      setAmount(null);
    }
  }

  return (
    <>
    <div className="label">Amount <span className="red">*</span></div>
            <div className="text-field-cont">
              <TextField 
              id="outlined-basic"
              InputProps={{ inputProps: { min: 0} }}  
              autoComplete="off" 
              type='number' 
              onClick={handleClickToAmount} 
              error={amount?false:true} 
              value={amount==="initialValue"?"":amount} 
              onChange={onChangeAmount} 
              style={{width: 500}} 
              label="Please Enter Amount" 
              variant="outlined" 
              />
            </div>
    </>
  )
}
