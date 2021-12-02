import React from 'react'
import './style.css';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

const CardC = () => {
     return (
          <>
          <Card className="cardc" sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h2" color="white" component="div">
         <PersonIcon fontSize='large'  className="icon"/> Customer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h2 className="c-name"> Active </h2> <h3 className="c-data"> 56</h3>
         <br/>
         <h2  className="c-name"> Inactive </h2> <h3 className="c-data"> 08</h3>
        </Typography>

      </CardContent>
     
    </Card>
               
          </>
     )
}

export default CardC ;


