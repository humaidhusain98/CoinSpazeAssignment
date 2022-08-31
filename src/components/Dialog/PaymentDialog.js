import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import {  handlePaymentAPI } from '../../mockServer/mockServerData';
import { useNavigate } from "react-router-dom";
import ToAddressFieldDesktop from './components/desktop/ToAddressFieldDesktop';
import TokenFieldDesktop from './components/desktop/TokenFieldDesktop';
import AmountFieldDesktop from './components/desktop/AmountFieldDesktop';
import DescriptionFieldDesktop from './components/desktop/DescriptionFieldDesktop';
import ToAddressFieldMobile from './components/mobile/ToAddressFieldMobile';
import TokenFieldMobile from './components/mobile/TokenFieldMobile';
import AmountFieldMobile from './components/mobile/AmountFieldMobile';
import DescriptionFieldMobile from './components/mobile/DescriptionFieldMobile';
const DialogDivDesktop = styled.div`
  width: 600px;
  height: 700px;

  @media (max-width: 700px) {
    display: none;
  }
  
  .heading{
    margin-top: 35px;
    margin-left: 50px;
    font-size: 30px;
  
    @media (max-width: 700px) {
      font-size: 18px;
    }
  }
  
  .suc-text{
    color: green;
    margin-top: 20px;
    font-size: 25px;
  }

  .view{
    margin-top: 40px;
    cursor: pointer;
    font-size: 18px;
  }

  .failed-text{
    color: red;
    margin-left: 30px;
    font-size: 25px;
    
  }
`;

const DialogDivMobile = styled.div`
  display: none;

  .heading{
    margin-top: 35px;
    margin-left: 50px;
    font-size: 30px;
  
    @media (max-width: 700px) {
      font-size: 18px;
      margin-left: 10px;
      width: 300px;
    }
  }
  

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 550px;
    background: white;
  }
  
  .suc-text{
    color: green;
    margin-top: 20px;
    font-size: 25px;
  }

  .view{
    margin-top: 40px;
    cursor: pointer;
    font-size: 18px;
  }

  .failed-text{
    color: red;
    margin-left: 30px;
    font-size: 25px;
    
  }
`;


export default function PaymentDialog(props) {
  let navigate = useNavigate();
  const { onClose, selectedValue, open , testCase } = props;

  //marks success,400,401 and 5XX states of dialog
  const [dialogState,setDialogState] = React.useState(1);
 
  const handleClose = () => {
    onClose(selectedValue);
    setAmount("initialValue");
    setToAddress("initialValue");
    setTimeout(()=>{setDialogState(1)},1000);

  };

  //fields
  const [toAddress,setToAddress] = React.useState('initialValue');
  const [tokenSelected, setTokenSelected] = React.useState('');
  const [amount,setAmount] = React.useState("initialValue");
  const [description,setDescription] = React.useState("");

  // stores response
  const [response,setResponse] = React.useState(null);


  //buttonDisabled state
  const [buttonDisabled,setBtnDisabled] = React.useState(true);


  //Gets retriggered when any of the mandatory fields change
  React.useEffect(()=>{
  //checks all conditions if satisfied, makes the Submit Button Active
  const checkAllConditionsSatisfied = ()=>{
    if(!toAddress || !tokenSelected || !amount){
      setBtnDisabled(true);
    }
    else if(isNaN(amount)===true || amount<=0  ){
      setBtnDisabled(true);
    }
    else{
      setBtnDisabled(false);
      }
    }


    checkAllConditionsSatisfied();
  },[toAddress,tokenSelected,amount]);

  const handleSubmitClick=async()=>{
    console.log("Handle Submit");
    setDialogState(0)
    //on success - Unit Test With All fields Correct
    if(testCase===0){
     const resp = await handlePaymentAPI("454dfg544tv45v45t435tgr5r",toAddress,tokenSelected.tokenSymbol,tokenSelected.tokenDecimal,amount,description,"ddsghfghgfhfghfdghfghfdhfghfghfg");
     setResponse(resp);
     if(resp.status===200){
      setDialogState(2);
    }
    }
    //  bad request 400  - Unit Test With mandatory field toAddress made empty to simulate error
    else if(testCase===1){
      const resp = await handlePaymentAPI("454dfg544tv45v45t435tgr5r","",tokenSelected.tokenSymbol,tokenSelected.tokenDecimal,amount,description,"ddsghfghgfhfghfdghfghfdhfghfghfg");
      setResponse(resp);
      if(resp.status===400){
        setDialogState(3);
      }
    
      
    }// unauthorized 401 - Unit Test With jwtCookie as null to simulate unAuthorized from API
    else if(testCase===2){
      const resp = await handlePaymentAPI("454dfg544tv45v45t435tgr5r",toAddress,tokenSelected.tokenSymbol,tokenSelected.tokenDecimal,amount,description,null);
      setResponse(resp);
      if(resp.status===401){
        setDialogState(4);
        setTimeout(()=>{
          navigate('/login')
        },2000);
      }
      
    }
      //server error 500 - Unit Test With amount negative to simulate internal server error
    else if(testCase===3){

      const resp = await handlePaymentAPI("454dfg544tv45v45t435tgr5r",toAddress,tokenSelected.tokenSymbol,tokenSelected.tokenDecimal,-12,description,"ddsghfghgfhfghfdghfghfdhfghfghfg");
      setResponse(resp);
      if(resp.status===500){
        setDialogState(5);
      }
     
    }
  }

  const handleViewOnExplorer = ()=>{
    if(response && response.status===200){
      if(response.tokenSymbol==='eth'){
        window.open(`https://etherscan.io/tx/${response.txHash}`);
      }
      else if(response.tokenSymbol==='btc'){
        window.open(`https://www.blockchain.com/btc/tx/${response.txHash}`)
      }
    }
  }

  return (
    <Dialog onClose={handleClose} open={open}>
        {
        dialogState===0 && (
          <>
          <DialogDivDesktop className='frcc'>
            <div className="loader">
              <img src={"/loader.svg"} alt="loader" />
            </div>
          </DialogDivDesktop>

          <DialogDivMobile  className='frcc'>
            <div className="loader">
              <img src={"/loader.svg"} alt="loader"  />
            </div>
          </DialogDivMobile>
          </>
        )
      }


      {
        dialogState===1 && (
          <>
           <DialogDivDesktop className='fcfsfs'>
              <div className="heading">
                Please fill Payment Details
              </div>
              <ToAddressFieldDesktop 
              toAddress={toAddress} 
              setToAddress={setToAddress}
              />

              <TokenFieldDesktop 
              tokenSelected={tokenSelected} 
              setTokenSelected={setTokenSelected} 
              />
            
              <AmountFieldDesktop 
              amount={amount}
              setAmount={setAmount}
              />

              <DescriptionFieldDesktop 
              description={description} 
              setDescription={setDescription} 
              />
            
            <div className="btn-cont">
                <Button onClick={handleSubmitClick} disabled={buttonDisabled} variant="contained">Submit</Button>
            </div>

          
    </DialogDivDesktop>

    <DialogDivMobile>
            <div className="heading">
              Please fill Payment Details
            </div>

            <ToAddressFieldMobile 
              toAddress={toAddress} 
              setToAddress={setToAddress}
            />
            
            <TokenFieldMobile 
              tokenSelected={tokenSelected} 
              setTokenSelected={setTokenSelected}
            />
           
            <AmountFieldMobile 
                 amount={amount}
                 setAmount={setAmount}
            />
         
            <DescriptionFieldMobile 
               description={description} 
               setDescription={setDescription} 
            />
           
           <div onClick={handleSubmitClick} className="btn-cont ml15">
               <Button onClick={handleSubmitClick} disabled={buttonDisabled} variant="contained">Submit</Button>
           </div>
    </DialogDivMobile>
          </>
        )
      }
     
      {
        dialogState===2 && (
          <>
          <DialogDivDesktop className='frcc'>
            <div className="success fccfs">
              <img src={"/success.png"}  alt="success" />
              <div className="suc-text">
                Success
              </div>
              <div className="view" onClick={handleViewOnExplorer}>
                View Transaction on Explorer
              </div>
            </div>
            
          </DialogDivDesktop>

          <DialogDivMobile className='frcc'>
            <div className="success">
              <img src={"/success.png"} alt="success" />
             
            </div>
            <div className="suc-text">
            Success
            </div>

            <div className="view" onClick={handleViewOnExplorer}>
                View Transaction on Explorer
            </div>
          </DialogDivMobile>
          </>
        )
      }


      {
        (dialogState===3 || dialogState===4 || dialogState===5) && (
          <>
          <DialogDivDesktop className='frcc'>
          <div className="failed">
              <img src={"/failed.png"} height={250} alt="failed"/>
              <div className="failed-text">
               {dialogState===3?"400 Bad Request":dialogState===4?"401 UnAuthorized":"5XX Server Error"}
              </div>
            </div>
           
          </DialogDivDesktop>

          <DialogDivMobile className='frcc'>
          <div className="failed">
              <img src={"/failed.png"} height={250} alt="failed" />
              <div className="failed-text">
                {dialogState===3?"400 Bad Request":dialogState===4?"401 UnAuthorized":"5XX Server Error"}
              </div>
            </div>
          </DialogDivMobile>
          </>
        )
      }

     

 
    </Dialog>
  );
}

