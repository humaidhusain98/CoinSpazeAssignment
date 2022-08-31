import React, { useEffect } from 'react'
import { getAllTokensAPI } from '../../../../mockServer/mockServerData';
import { Select, MenuItem } from '@mui/material';

export default function TokenFieldMobile({tokenSelected,setTokenSelected}) {

    const [tokensList,setTokensList] = React.useState([]);

    useEffect(()=>{
      setTokensList(getAllTokensAPI());
    },[])

    const handleChangeTokenSelected = (event) => {
        setTokenSelected(event.target.value);
      };

  return (
    <>
    <div className="label ml15">From <span className="red">*</span> </div>
    <div className="text-field-cont ml15">
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={tokenSelected}
        onChange={handleChangeTokenSelected}
        style={{width: 280,height:38}}
      >
          {
              tokensList.map((data,key)=>(
                <MenuItem key={key} value={data}>
                  <div className="token-obj frcfs">
                      <img height="25px" width="25px" src={data.tokenImage} alt="" className="logo" />
                  </div>
                
                </MenuItem>
              ))
            }
      
    </Select>

    </div>
    </>
  )
}
