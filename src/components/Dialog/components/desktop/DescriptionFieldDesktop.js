import React from 'react'
import { TextareaAutosize } from '@mui/material';

export default function DescriptionFieldDesktop({description,setDescription}) {

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
      
    };


  return (
    <>
    <div className="label">Description (Optional)</div>
    <div className="descr">
      <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Description" 
          value={description} 
          onChange={onChangeDescription}
          style={{ width: 470,height:100 ,outlineColor: '#1976d2' ,borderRadius: 5,padding:15,borderColor:'internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'}}
        />
    </div>
    </>
  )
}
