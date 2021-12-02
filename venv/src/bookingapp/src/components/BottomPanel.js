import React from 'react'
import './style.css'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const BottomPanel = () => {
     return (


          <div id="btm">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,202.7C672,160,768,96,864,69.3C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
<h1 id="text"> OPERATIONS</h1>
<div className="cardboxx"> 
<Card className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb" >
        <Typography gutterBottom variant="h4" color="white" component="div">
         <AddTwoToneIcon fontSize='large'  className="icon"/> Manage Roles
        </Typography>
        <Button className="btn-b" variant="contained" size='large' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="large"/></Button>
        
      </CardContent>
     
    </Card>

    <Card  className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb">
        <Typography id="cen" gutterBottom variant="h4" color="white" component="div">
         <PersonIcon fontSize='large'  className="icon"/> Employee Details
        </Typography>
        <Button className="btn-b" variant="contained" size='large' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="large"/></Button>
              
      </CardContent>
     
    </Card>

    <Card  className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb">
        <Typography gutterBottom variant="h4" color="white" component="div">
         <ShoppingBagIcon fontSize='large'  className="icon"/> Assign Roles
        </Typography> 
        
        <Button className="btn-b"  variant="contained" size='large' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="large"/></Button>
               

      </CardContent>
     
    </Card>
</div>

               
          </div>
     )
}

export default BottomPanel
