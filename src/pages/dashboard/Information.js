import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import { Grid, Button, Link } from '@material-ui/core';





export default function Information() {

  const theme = useTheme();

  const [address, setAddress] = useState("3820 Union Road");
  const [city, setCity] = useState("Collage Park");
  const [state, setState] = useState("GA");
  const [zip, setZip] = useState("30349");
  const [bedrooms, setBedrooms] = useState("4");
  const [bathrooms, setBathrooms] = useState("3");

  function preventDefault(event) {
    console.log("EDIT")
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Grid container spacing={1} justify="flex-start">
      <Title>{address}</Title>
      <Grid item xs={6}>Adreess:</Grid><Grid item xs={6} alignItems="flex-end"> {address} </Grid>
      <Grid item xs={6}>City/Town:</Grid><Grid item xs={6} alignItems="flex-end"> {city} </Grid>
      <Grid item xs={6}>State:</Grid> <Grid item xs={6} alignItems="flex-end">{state} </Grid>
      <Grid item xs={6}>Zip Code: </Grid><Grid item xs={6} alignItems="flex-end">{zip} </Grid>
      <Grid item xs={6}># Bedrooms:</Grid> <Grid item xs={6} alignItems="flex-end">{bedrooms} </Grid>
      <Grid item xs={6}># Bathrooms:</Grid> <Grid item xs={6} alignItems="flex-end">{bathrooms} </Grid>
     
      <Grid item xs={6}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Edit
        </Link>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
