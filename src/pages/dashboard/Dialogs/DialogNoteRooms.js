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
import TextsmsIcon from '@material-ui/icons/Textsms';



export default function DialogNoteRooms(props) {

    const {
        classes,
        storageData,
        sendStateNote,
        checkStateForColor,
        id,
        isMosaico,
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);

    const [window, setAddress] = React.useState('');
    const [floors, setCity] = React.useState('');
    const [walls, setState] = React.useState('');

    const [stored, setStored] = React.useState(false);
    const [note, setNote] = React.useState('');



    function handleClickOpenPopper() {
        setOpen(true);
    };

    function handleClosePopper() {
        setOpen(false);
    };

    function onClickEdit() {

        let data = {
            window,
            floors,
            walls
        }
        if (note !== '') {
            setStored(true);
            sendStateNote(true, id);
        }

        handleClosePopper();
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setNote(value);

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

            {stored ?
                <div>
                    <Link href="#" >
                        <TextsmsIcon size="small" style={{ marginLeft: "-40px", display: "block", color: "#049ce4" }} fontSize="small" onClick={handleClickOpenPopper} />

                    </Link>
                </div>
                :
                <div>
                    <Link href="#" >
                        <TextsmsIcon style={{ marginLeft: "-40px", display: "block", color: "#000000" }} fontSize="small" onClick={handleClickOpenPopper} fontSize="small" />


                    </Link>
                </div>}

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="note"
                                label="Note"
                                margin="dense"
                                variant="outlined"
                                name="note"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                multiline
                                rows={4}
                                value={note}
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