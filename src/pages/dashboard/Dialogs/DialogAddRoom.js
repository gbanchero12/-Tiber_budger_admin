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
import AssignmentIcon from '@material-ui/icons/Assignment';
import ToggleButtonSizes from '../Components/ToggleButtons';
export default function DialogAddRoom(props) {

    const {
        classes,
        storageData,
        fillRows,
        displayIcons,
        id
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('xs');
    const [open, setOpen] = React.useState(false);

    const [place, setPlaceName] = React.useState('');

    const [stored, setStored] = React.useState(false);



    function handleClickOpenPopper() {
        setOpen(true);
    };

    function handleClosePopper() {
        setOpen(false);
    };

    function onClickEdit() {

        let data = {
            place,
            id
        }
        fillRows(data, id);
        setStored(true);

        displayIcons(data.id);
        handleClosePopper();
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setPlaceName(value);
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
        <span>

            <Link color="primary" href="#" onClick={handleClickOpenPopper}>+ Add room</Link>

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} justify="flex-end" alignItems="flex-end">
                        <Grid item xs={12}>
                        <p>Select Room Type</p> 
                            <ToggleButtonSizes /></Grid>
                        <Grid item xs={12}> 
                        <p>Enter Room Name</p>
                        <TextField variant="filled" fullWidth label="Enter Room Name" id="place" name="place" type="text" onChange={handleChange}> </TextField></Grid>
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
        </span>
    );

}