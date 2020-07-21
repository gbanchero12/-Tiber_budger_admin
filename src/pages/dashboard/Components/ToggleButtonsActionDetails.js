import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core';
import Image from 'react-image-resizer';
import paiting from '../../../dummy/painting.jpg';
import flooring from '../../../dummy/flooring.JPG';
import appliance from '../../../dummy/appliance.JPG';
const useStyles = makeStyles({
    ToggleButton: {
        width: "6rem"
    },
    container: {
        overflow: "hidden",
    }
});


export default function ToggleButtonActionDetails(props) {

    const { getDataFromToggle } = props;
    const [alignment, setAlignment] = React.useState('');
    const [room, setRoom] = React.useState('');





    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        getDataFromToggle(room, alignment);
    };

    const handleChangeRoom = (event, room) => {
        setRoom(room);
        getDataFromToggle(room, alignment);
    };



    const classes = useStyles();
    return (
        <div>

            <Grid container spacing={1} justify="center" alignItems="center">

                <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="Painting" style={{ backgroundColor: "#f8f8fa" }}>
                        <Image img src={paiting} height={90} width={90} />
                    </ToggleButton>
                    <ToggleButton value="Flooring" style={{ backgroundColor: "#f8f8fa" }}>

                        <Image img src={flooring} height={90} width={90} />
                    </ToggleButton>
                    <ToggleButton value="Appliance" style={{ backgroundColor: "#f8f8fa" }}>

                        <Image img src={appliance} height={90} width={90} />
                    </ToggleButton>
                </ToggleButtonGroup>

                <Grid item xs={12} style={{ marginLeft: 140 }} >    <p>SELECT ROOM TYPE</p> </Grid>

                <ToggleButtonGroup size="small" value={room} exclusive onChange={handleChangeRoom}>
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


                <ToggleButtonGroup size="small" value={room} exclusive onChange={handleChangeRoom}>

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





        </div >
    );
}