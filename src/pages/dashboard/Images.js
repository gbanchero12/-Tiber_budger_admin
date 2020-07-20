import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Grid } from '@material-ui/core';
import house from '../../dummy/house.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'react-image-resizer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const showHouse = () => {
  return (
    <Image
      img src={house}
      alt="House image"
      class="center"
      height={200}
      width={200}
    />
  );
}

export default function Images() {
  const classes = useStyles();
  return (<div>
    <Grid container justify="center" spacing={1} alignItems="flex-end"><Grid item>Current Proyect Owner</Grid><AccountCircleIcon style={{fill: "#049ce4"}} fontSize="large"/></Grid>
    <Grid container alignItems="center" justify="space-around" >

    <Link style={{color:"black"}} href="#"><ArrowBackIosIcon /></Link>
      
      


   
      {showHouse()}
     
    <Link style={{color:"black"}}  href="#"><ArrowForwardIosIcon /></Link>
    </Grid>
    </div>
  );
}


