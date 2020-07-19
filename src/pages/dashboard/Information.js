import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import { Grid, Button, Link } from '@material-ui/core';
import DialogMenu from './Dialogs/DialogMenu';
import DialogNote from './Dialogs/DialogNote';


export default function Information() {

  const theme = useTheme();

  const [address, setAddress] = useState("3820 Union Road");
  const [city, setCity] = useState("Collage Park");
  const [state, setState] = useState("GA");
  const [zip, setZip] = useState("30349");
  const [bedrooms, setBedrooms] = useState("4");
  const [bathrooms, setBathrooms] = useState("3");
  const [note, setNote] = useState("");

  function storageData(data) {
    setAddress(data.address)
    setCity(data.city)
    setState(data.state)
    setZip(data.zip)
    setBedrooms(data.bedrooms)
    setBathrooms(data.bathrooms)
  }

  function storageNote(data) {
    setNote(data.note)
  }

  return (
    <React.Fragment>
      <Title item xs={12}>{address}</Title>
      <Grid container spacing={1} justify="flex-start">
        <Grid item xs={6} alignItems="flex-start">Adreess:</Grid> <Grid xs={6} item alignItems="flex-end">{address} </Grid>
        <Grid item xs={6} alignItems="flex-start">City/Town: </Grid><Grid item xs={6} alignItems="flex-end"> {city} </Grid>
        <Grid item xs={6} alignItems="flex-start">State:</Grid><Grid item xs={6} alignItems="flex-end"> {state} </Grid>
        <Grid item xs={6} alignItems="flex-start">Zip Code:</Grid><Grid item xs={6} alignItems="flex-end"> {zip} </Grid>
        <Grid item xs={6} alignItems="flex-start"># Bedrooms:</Grid><Grid item xs={6} alignItems="flex-end">{bedrooms} </Grid>
        <Grid item xs={6} alignItems="flex-start"># Bathrooms:</Grid><Grid item xs={6} alignItems="flex-end"> {bathrooms} </Grid>

        <Grid item xs={6}>

          <DialogMenu storageData={storageData} />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item><Title>Property Notes</Title></Grid>
        <Grid item xs={12}><DialogNote storageNote={storageNote} /></Grid>
        <Grid item xs={12}>{note !== "" ? ("Note: " + note) : null}</Grid>
      </Grid>
    </React.Fragment>
  );
}
