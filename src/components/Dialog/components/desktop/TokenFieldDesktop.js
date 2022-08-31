import React,{useEffect} from 'react'
import { getAllTokensAPI } from '../../../../mockServer/mockServerData';
import { Select, MenuItem } from '@mui/material';

export default function TokenFieldDesktop({tokenSelected,setTokenSelected}) {

    const [tokensList,setTokensList] = React.useState([]);

    useEffect(()=>{
      setTokensList(getAllTokensAPI());
    },[])

    const handleChangeTokenSelected = (event) => {
        setTokenSelected(event.target.value);
      };
  return (
    <>
    <div className="label">From <span className="red">*</span> </div>
            <div className="text-field-cont">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tokenSelected}
                onChange={handleChangeTokenSelected}
                style={{width: 500,height:100}}
               
              >

            {
              tokensList.map((data,key)=>(
                <MenuItem key={key} value={data}>
                  <div className="token-obj frcfs">
                      <img height="50px" width="50px" src={data.tokenImage} alt="" className="logo" />
                  </div>
                
                </MenuItem>
              ))
            }
              
            </Select>

            </div>
        </>
  )
}
