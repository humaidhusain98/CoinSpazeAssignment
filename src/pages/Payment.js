import '../styles/Payment.css';
import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import PaymentDialog from '../components/Dialog/PaymentDialog';
import TestCaseSelector from '../components/TestCaseSelector/TestCaseSelector';



const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .heading-lg{
    font-size: 40px;
    width: 600px;
    margin-top: 30px;

    @media (max-width: 700px) {
      width: 350px;
    }
  }

  .pay-btn{
    margin-top: 100px;
  }

`;


function Payment() {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [testCase,setTestCase] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(null);
  };

  return (
    <MainContainer className="App fcfsc">
      <div className="heading-lg">Payment Page</div>
    
      <TestCaseSelector testCase={testCase} setTestCase={setTestCase}/>
      <div className="pay-btn">
        <Button onClick={handleClickOpen} variant="contained">Pay</Button>
      </div>
   
      <PaymentDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        testCase={testCase} 
        setTestCase={setTestCase}
        
      />
    </MainContainer>
  );
}

export default Payment;
