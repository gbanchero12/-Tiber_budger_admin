import { makeStyles } from '@material-ui/core/styles';
import React, { Component, useCallback, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, withStyles, Link, Box } from '@material-ui/core';
import HandleChange from '../../../Functions/Functions';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useDropzone } from 'react-dropzone';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import jpgIcon from './../../../dummy/uploadIconJPG.JPG'
import Image from 'react-image-resizer';


export default function DialogPhoto(props) {

    const {
        classes,
        storageData
    } = props;

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);

    const [window, setAddress] = React.useState('');
    const [floors, setCity] = React.useState('');
    const [walls, setState] = React.useState('');

    const [stored, setStored] = React.useState(false);



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

        setStored(true);

        //storageData(data);
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
        <div>

            {stored ?
                <div>
                    <Link href="#" >

                        <PhotoCameraIcon style={{ marginLeft: "-40px", display: "block", color: "#049ce4" }} fontSize="small" fontSize="small" onClick={handleClickOpenPopper} />
                    </Link>
                </div>
                :
                <div>
                    <Link href="#" >
                        <PhotoCameraIcon style={{ marginLeft: "-40px", display: "block", color: "#000000" }} fontSize="small" onClick={handleClickOpenPopper} />

                    </Link>
                </div>}

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll='body'
                open={open}
                onClose={handleClosePopper}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>

                    <Basic />



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


// ----------------------------- DropZone -----------------------------



function Basic(props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <div>
            <img src={jpgIcon}
                style={{
                    height: 30,
                    width: 30,
                    marginTop: 10,
                    paddingTop: 5,
                    paddingRight: 5,
                    alignContent: "flex-end"
                }}
                alt="Logo file upload type"

            />
            {file.path} - {file.size} bytes
        </div>
    ));

    return (
        <Grid container alignContent="flex-end" justify="flex-start">
            <Grid {...getRootProps({ className: 'dropzone' })} >
                <input {...getInputProps()} />
                <p>Drag and drop files or</p><br></br>
                <UploadButtons />
            </Grid>

          
            <ul>{files}</ul>
        </Grid >
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

function UploadButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button variant="contained" color="primary" component="span">
                Browse
          </Button>

        </div>
    );
}
