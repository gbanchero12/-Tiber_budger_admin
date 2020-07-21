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
export default function DialogMenu(props) {

    const {
        classes,
        storageData,
        sendStateBubble,
        checkStateForColor,
        id,
        isMosaico
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);

    const [window, setAddress] = React.useState('');
    const [floors, setCity] = React.useState('');
    const [walls, setState] = React.useState('');

    const [stored, setStored] = React.useState("redState");



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

        if (floors !== '' && walls !== '' && window !== '') {
            setStored("greenState");
            sendStateBubble(true, id)
        }
        else
            if (floors !== '' || walls !== '' || window !== '') {
                setStored("yellowState");
                sendStateBubble(false, id);
            }

        handleClosePopper();
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        switch (name) {
            case "window":
                setAddress(value)
                break;
            case "floors":
                setCity(value)
                break;
            case "walls":
                setState(value)
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
        <span>

            {(stored === "yellowState" && !isMosaico )?
                <AssignmentIcon style={{ marginLeft: "-40px", display: "block", color: "#f9b200" }} fontSize="small" onClick={handleClickOpenPopper} /> : <div></div>}
            {stored === "greenState" ?
                <div>
                    <Link href="#" >

                        <AssignmentIcon style={{ marginLeft: "-40px", display: "block", color: "#049ce4" }} fontSize="small" onClick={handleClickOpenPopper} />
                    </Link>
                </div>
                : <div></div>}
            {stored === "redState" ?
                <div>
                    <Link href="#" >

                        <AssignmentIcon style={{ marginLeft: "-40px", display: "block", color: "#000000" }} fontSize="small" onClick={handleClickOpenPopper} fontSize="small" />

                    </Link>
                </div> : <div></div>}

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={4}>
                            <TextField
                                id="window"
                                label="Window State"
                                size="small"
                                variant="outlined"
                                name="window"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                value={window}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="floors"
                                label="Floors"
                                size="small"
                                variant="outlined"
                                name="floors"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                value={floors}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="walls"
                                label="Walls"
                                size="small"
                                variant="outlined"
                                name="walls"
                                onChange={handleChange}
                                InputProps={{
                                    readOnly: false
                                }}
                                value={walls}
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
        </span>
    );

}