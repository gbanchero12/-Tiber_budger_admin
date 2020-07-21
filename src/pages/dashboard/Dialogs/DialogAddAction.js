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
import AddIcon from '@material-ui/icons/Add';
import ToggleButtonActionDetails from '../Components/ToggleButtonsActionDetails';


export default function DialogAddRoom(props) {

    const {
        classes,
        id,
        addAction
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('xs');
    const [open, setOpen] = React.useState(false);

    const [amount, setAmount] = React.useState(0);
    const [scope, setScope] = React.useState('');

    const [roomType, setRoomType] = React.useState("");

    const [actionDetails, setActionDetails] = React.useState("");



    function handleClickOpenPopper() {
        setOpen(true);
    };

    function handleClosePopper() {
        setOpen(false);
    };

    function getDataFromToggle(roomType = '', actionDetails = '') {
        if (roomType !== '' && roomType !== undefined)
            setRoomType(roomType);
        if (actionDetails !== '' && actionDetails !== undefined)
            setActionDetails(actionDetails);
    }

    function onClickEdit() {

        let data_ = {
            amount: amount,
            id: '',
            roomType: roomType,
            actionDetails: actionDetails,
            scope: scope,
        }
        addAction(data_);

        handleClosePopper();
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setAmount(value);
    }

    function handleChangeScope(event) {
        const target = event.target;
        const value = target.value;
        setScope(value);
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

            <Button onClick={handleClickOpenPopper} className={classes.btnAdd}><AddIcon className={classes.addIcon} /></Button><Link color="primary" href="#" onClick={handleClickOpenPopper}>Add Action</Link>

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} justify="center" alignItems="center">

                        <p>SELECT ACTION DETAILS</p>
                        <ToggleButtonActionDetails getDataFromToggle={getDataFromToggle} />

                        <p>ESTIMATE COSTS</p>
                        <TextField variant="filled" placeholder="$" defaultValue="$" fullWidth label="Amount" id="amount" name="amount" type="number" onChange={handleChange}> </TextField>


                        <p>SCOPE / NOTES</p>
                        <TextField variant="filled" multiline size="large" rows={3} fullWidth label="Scope / Notes" id="scope" name="scope" type="text" onChange={handleChangeScope}> </TextField>


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
        </span >
    );

}