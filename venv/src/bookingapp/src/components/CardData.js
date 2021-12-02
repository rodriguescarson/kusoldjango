
import React from 'react'
import './style.css';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import MultiType  from './MultiType';


const CardData = () => {
     return (

          <>

          <div id="card-box">
              <Card className="card-d" sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom id="com" variant="h2" color="white" component="div">
         <AccountBalanceWalletIcon fontSize='large'  className="icon"/> TURN OVER
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h2 className="c-name"> Total Revenue </h2>  
         
        
         <h3 className="c-data"> $95006</h3>
         <br/>

         <h2  className="c-name"> Average Revenue </h2> 
        
         <h3 className="c-data"> $998</h3>

         <br/>
         <h2 className="c-name"> Per Service Revenue </h2>  
         
        
         <h3 className="c-data"> $6000</h3>
         <br/>

        </Typography>

        
      </CardContent>
     
    </Card>
             
             <MultiType/> 
          </div>



</>
     )
}

export default CardData;
