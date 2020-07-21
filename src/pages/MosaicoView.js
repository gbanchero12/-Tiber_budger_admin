import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import DialogAddRoom from './dashboard/Dialogs/DialogAddRoom'
import { withStyles, Link, Grid, Box } from '@material-ui/core';
import Title from './dashboard/Title';

const styles = theme => ({
    root: {
        borderBottom: "none"
    },
    tableCell: {
        borderBottom: "none"
    }
});

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: '#999',
    m: 1,
    border: 1,
    style: {
        width: 10,
        height: 8,
        alignItems: "center",
        padding: 68,
        paddingLeft: 55,
    },

};


class MosaicoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            inicialState: true,
            pointerState: [],
            mosaicoView: false,

        };
    }
    render() {
        const { classes, displayIcons, fillRows, changeFromMosaico, changeToMosaico, rows } = this.props;


        return (

            <React.Fragment>
                <Title>Rooms <Link onClick={changeFromMosaico}><EditOutlinedIcon /></Link> <Link onClick={changeToMosaico}><BlurOnIcon /></Link></Title>
                <Grid container alignItems="center" justify="center">
                    {rows.map((row) => (

                        <Box xs={4} borderRadius={16} {...defaultProps}>

                            <TableRow key={row.id}>

                                <strong>{row.firstColumn}</strong> <br></br> <span style={{ marginLeft: 15, marginTop: -20 }}>{row.icons}</span>




                            </TableRow>
                        </Box>

                    ))}

                </Grid>



               

            </React.Fragment >
        );
    };
}


export default withStyles(styles)(MosaicoView);