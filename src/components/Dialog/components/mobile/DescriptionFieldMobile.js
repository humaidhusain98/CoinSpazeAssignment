import React from 'react'
import { TextareaAutosize } from '@mui/material'

export default function DescriptionFieldMobile({description,setDescription}) {
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  
};
  return (
    <>
    <div className="label ml15">Description (Optional)</div>
    <div className="descr ml15">
      <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Description"
          value={description} 
          onChange={onChangeDescription}
          style={{ width: 250,height:60 ,outlineColor: '#1976d2' ,borderRadius: 5,padding:15,borderColor:'internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'}}
        />
    </div>
    </>
  )
}
