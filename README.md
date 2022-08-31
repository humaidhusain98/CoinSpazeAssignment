a)
## Build Instructions
    To Build app follow these steps:
    1) Clone the repository
    2) run "npm install" in cmd in root folder to install all the required dependencies
    3) run "npm run build" in cmd in root folder to build the project. The build will be available in the build folder. Use the build

b)
## Usage Instructions
    For First Time Usage:
    1) Clone the repository
    2) run "npm install" in cmd in root folder to install all the required dependencies
    3) run "npm start" in root cmd in root folder to start the server.
    4) Open http://localhost:3000/ on your browser to use the App 

    After Setting Up (Not first time usage):
    1) run "npm start" in root cmd in root folder to start the server.
    2) Open http://localhost:3000/ on your browser to use the App 


c) 
## What else you would have implemented had you more time to work on it
    I would have implemented the following:
    1) I would have implemented a Real Node.js server rather than mockServer with mockData
    2) Would have added JWT issuing, signing and decoding. Would have sent the User data in JWT with 2 minutes expiry
    3) Would have verified JWT before handlingPayment. Currently just checking if its present or not
    4) Would have installed Redux, created User State and would have used it in entire app
    5) Would have implemented Real To address checks using suitable library to verify that the To Address is valid.
    6) Would not have used material ui as the customization options and functionality are limited
    7) Would have setup tailwind css

d)
## List down all assumptions you made while designing/implementing
    The assumptions made while designing.
    1) The user is already authenticated in the payment page and has all required user details like user-address 
    2) Any jwtCookie passed is valid in handlePaymentAPI if jwtCookie is passed
    3) Balance of Token in Normal units,Usually eth and similar assets return balance in Wei where  10^18 Wei= 1 Ether
    4) There is no real server but mock server
    5) While implementing test cases, purposely adding wrong data to get respective response status even though the fields do not give wrong data.
    6) Payment gets confirmed in 2 seconds. Usually payments may take more than 2 seconds to complete  