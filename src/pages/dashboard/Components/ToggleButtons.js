import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
    ToggleButton: {
        width: "6rem"
    },
    container: {
        overflow:"hidden",
    }
});


export default function ToggleButtonSizes() {
    const [alignment, setAlignment] = React.useState('Living');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };



    const classes = useStyles();
    return (
        <div>

            <Grid container spacing={2} className={classes.container}  justify="center" alignItems="center">
                <Grid item xs={12}>
                    <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                        <ToggleButton value="Living">
                            Living
                        </ToggleButton>
                        <ToggleButton value="Dining">
                            Dining
                        </ToggleButton>
                        <ToggleButton value="Bedroom">
                            Bedroom
                        </ToggleButton>
                        <ToggleButton value="Bathroom">
                            Bathroom
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
           
                <Grid item xs={12}>
                    <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                        <ToggleButton value="Kittchen">
                            Kittchen
                         </ToggleButton>
                        <ToggleButton value="Hallway">
                            Hallway
                        </ToggleButton>
                        <ToggleButton value="Garage">
                            Garage
                        </ToggleButton>
                        <ToggleButton value="Utility">
                            Utility
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>

            </Grid>



        </div >
    );
}