// timeout function to imitate api taking some time to confirm payment
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAllTokensAPI =()=>{
    return [
        {
            tokenName:"Ethereum",
            tokenSymbol:"eth",
            tokenImage: "/eth.png",
            tokenDecimal: 18
        },  
        {
            tokenName:"Bitcoin",
            tokenSymbol:"btc",
            tokenImage: "/btc.png",
            tokenDecimal: 1
        }
    ]
} 

//JWT cookie
//from addr, toAddr, amount, token,decimals
export const handlePaymentAPI =  async(fromAddress,toAddress,tokenSymbol,tokenDecimals,amount,description,jwtCookie)=>{
    
    await timeout(2000);
    //if no JWT or JWT has expired return UnAuthorized status 401
    if(!jwtCookie){// or invalid
        return {
            status: 401
        }
    } 

    // if any of the required field is not present return Status 400
    if(!tokenSymbol || !toAddress || !fromAddress || !tokenDecimals || !amount ){
        return {
            status: 400
        }
    }

    //if the amount is not a number or is less than zero which cannot happen then return Status 500 Server Cannot process it
    if(isNaN(amount)===true || amount<=0  ){
     
        return {
            status: 500
        }
    }

    //if all of the checks have passed , process transaction by coinname return respective transaction hash
    if(tokenSymbol==='btc'){
        return {
            status: 200,
            txHash:"5420a8f77594e9114c2d97db07f1e9c796fd656a15a423869a1d6fd575d06c01",
            tokenSymbol:tokenSymbol,
    
        }
    }

    else if(tokenSymbol==='eth'){
        return {
            status: 200,
            txHash:"0x0d719a67aa826f60d24e2991b9c45b96bf94ff8d8301bcc8bd89934482d63439",
            tokenSymbol:tokenSymbol,
    
        }
    }

    // some processing problem of server so returning http status 500 Internal Server error
    else{
        return {
            status: 500
        }
    } 
    

   

   

}

