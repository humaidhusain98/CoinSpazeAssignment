import React from 'react'
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const MainContainer = styled.div`
 
 width: 100%;

 .heading{
     width: 700px;
     font-size: 20px;
     margin-left: 20px;
     margin-top: 10px;
     @media (max-width: 700px) {
        width: 250px;
      
        margin-left: 10px;
    }

 }

 .btn-cont{
    gap:20px;
    margin-left: 50px;
    width: 700px;
    margin-top: 20px;
    
    @media (max-width: 700px) {
        height: 300px;
        flex-direction: column;
        width: 350px;
        margin-left: 10px;
      }
 }

`;

export default function TestCaseSelector({testCase,setTestCase}) {
    
    const handleOnClick = (num)=>{
        setTestCase(num);
    }

  return (

    <MainContainer className='fccfs'>
                <div className="heading frcfs">
                    Select Test Case API Response
                </div>
                <div className="btn-cont frcc ">
                    <Button onClick={()=>{handleOnClick(0)}} variant={testCase===0?"contained":"outlined"}>On Success</Button>
                    <Button onClick={()=>{handleOnClick(1)}} variant={testCase===1?"contained":"outlined"}>Bad Request</Button>
                    <Button onClick={()=>{handleOnClick(2)}} variant={testCase===2?"contained":"outlined"}>Unauthorized</Button>
                    <Button onClick={()=>{handleOnClick(3)}} variant={testCase===3?"contained":"outlined"}>Server Error</Button>
                </div>
              
    </MainContainer>

  )
}
