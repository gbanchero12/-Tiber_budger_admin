import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, withStyles, Link } from '@material-ui/core';
import HandleChange from '../../../Functions/Functions';

export default function DialogMenu(props) {

    const {
        classes,
        storageData
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);

    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [zip, setZip] = React.useState('');
    const [bathrooms, setBathrooms] = React.useState('');
    const [bedrooms, setBedrooms] = React.useState('');



    function handleClickOpenPopper() {
        setOpen(true);
    };

    function handleClosePopper() {
        setOpen(false);
    };

    function onClickEdit() {

        let data = {
            address,
            city,
            state,
            zip,
            bathrooms,
            bedrooms
        }

        storageData(data);
        handleClosePopper();
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        switch (name) {
            case "address":
                setAddress(value)
                break;
            case "city":
                setCity(value)
                break;
            case "state":
                setState(value)
                break;
            case "zip":
                setZip(value)
                break;
            case "bathrooms":
                setBathrooms(value)
                break;
            case "bedrooms":
                setBedrooms(value)
                break;
            default:
                break;
        }
    }


    const onClickAdd = () => {
        //DO SOMTHING
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Link color="primary" href="#" onClick={handleClickOpenPopper}>
                Edit
        </Link>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={4}>
                            <TextField
                                id="address"
                                //className={classes.textField}
                                label="Address"
                                margin="dense"
                                variant="outlined"
                                name="address"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                            //value={nombreFarmacia}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="city"
                                //className={classes.textField}
                                label="City / Town"
                                margin="dense"
                                variant="outlined"
                                name="city"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                            //value={nombreFarmacia}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="state"
                                //className={classes.textField}
                                label="State"
                                margin="dense"
                                variant="outlined"
                                name="state"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                            //value={nombreFarmacia}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="zip"
                                //className={classes.textField}
                                label="Zip Code"
                                margin="dense"
                                variant="outlined"
                                name="zip"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                            //value={nombreFarmacia}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="bedrooms"
                                //className={classes.textField}
                                label="Bedrooms"
                                margin="dense"
                                variant="outlined"
                                name="bedrooms"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                type="number"
                            //value={nombreFarmacia}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="bathrooms"
                                //className={classes.textField}
                                label="Bathrooms"
                                margin="dense"
                                variant="outlined"
                                name="bathrooms"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                type="number"
                            //value={nombreFarmacia}
                            />
                        </Grid>


                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopper} color="primary">
                        Cancel
            </Button>
                    {(<Button variant="contained" color="primary" onClick={onClickEdit}>
                        Save
                    </Button>)}
                </DialogActions>
            </Dialog>
        </div>
    );

}