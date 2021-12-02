import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
import './style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

const CardS= () => {
     return (
          <>
          <Card className="cards" sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h2" margin-bottom="3rem" color="white" component="div">
         <SettingsIcon fontSize='large'  className="icon"/> Services
        </Typography>
        <Typography  margin-top="2rem" variant="body2" color="text.secondary">
         <h2 className="c-name"> Active </h2> <h3 className="c-data"> 44</h3>
         <br/>
         <h2  className="c-name"> Inactive </h2> <h3 className="c-data"> 08</h3>
        </Typography>

      </CardContent>
     
    </Card>
               
          </>
     )
}

export default CardS ;