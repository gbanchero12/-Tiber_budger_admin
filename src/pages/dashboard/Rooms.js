import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import RadioButtonCheckedTwoToneIcon from '@material-ui/icons/RadioButtonCheckedTwoTone';
import { Box, Link, Hidden, Grid, TextField, withStyles } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import DialogRoomsBubble from './Dialogs/DialogRoomsBubble';
import DialogPhoto from './Dialogs/DialogPhoto';
import DialogNoteRooms from './Dialogs/DialogNoteRooms';
import DialogAddRoom from './Dialogs/DialogAddRoom';


// Generate Order Data
function createData(id, icon, firstColumn, l, w, h, lxH, icons) {
  return { id, icon, firstColumn, l, w, h, lxH, icons };
}


function inline(text) {
  return (
    <div>
      <TextField
        id="with-placeholder"
        style={{ margin: "-7px" }}
        margin="normal"
        variant="outlined"
        autoFocus={true}
        size="small"
        defaultValue={text}
      />


    </div>
  );
}


const icons = (id) => {
  return (

    <div>
      <Grid container justify="flex-end" style={{ width: 60, marginLeft: 17 }} alignItems="flex-end">

        <Grid item xs={4} ><DialogNoteRooms  /></Grid>
        <Grid item xs={4}><DialogPhoto  /></Grid>
        <Grid item xs={4}><DialogRoomsBubble  /></Grid>

      </Grid>
    </div>
  );
}







const styles = theme => ({
  root: {
    borderBottom: "none"
  },
  tableCell: {
    borderBottom: "none"
  }
});


class Rooms extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
      rows: [
        createData(0, <RadioButtonCheckedTwoToneIcon style={{ fill: "#c00000", marginRight: -30 }} fontSize="small" />,
          <span style={{ fontSize: 11, display: "inline-block", width: "60px" }} >Living Room</span>, inline("12"), inline("14"), inline("7"), inline("168"), icons(0)),
        createData(1, <RadioButtonCheckedTwoToneIcon style={{ fill: "#f5b201", marginRight: -30 }} fontSize="small" />,
          <span style={{ fontSize: 11, display: "inline-block", width: "60px" }} >Kitchen</span>, inline("12"), inline("14"), inline("7"), inline("168"), icons(1)),
        createData(2, <FiberManualRecordIcon style={{ fill: "#129e00", marginRight: -30 }} fontSize="small" />,
          <span style={{ fontSize: 11, display: "inline-block", width: "60px" }}>Bedroom 1</span>, inline("12"), inline("14"), inline("7"), inline("168"), icons(2)),
        createData(3, <RadioButtonCheckedTwoToneIcon style={{ fill: "#c00000", marginRight: -30 }} fontSize="small" />,
          <span style={{ fontSize: 11, display: "inline-block", width: "60px" }}>Bedroom 2</span>, inline(" - "), inline(" - "), inline(" - "), inline(" - "), icons(3)),
      ],
      inicialState: true,
      iconColor: ["red"]
    };




  }




  render() {
    const { classes } = this.props;

    const sendStateNote = (state, id) => {
      let iconColorStored = this.state.iconColor;
      console.log(id);
      //this.state.rows[0].icon.props.style.fill = "yellow";
    }

    const sendStatePhoto = (state, id) => {
      let iconColorStored = this.state.iconColor;
      if (iconColorStored[id - 1] === undefined || iconColorStored[id - 1].color === "red") {
        iconColorStored[id - 1] = "yellow";
        this.setState({ iconColor: iconColorStored })
      }
      console.log(this.state)
    }

    const sendStateBubble = (state, id) => {
      let iconColorStored = this.state.iconColor;
      if (iconColorStored[id - 1] === undefined || iconColorStored[id - 1].color === "red") {
        iconColorStored[id - 1] = "yellow";
        this.setState({ iconColor: iconColorStored })
      }
      console.log(this.state)
    }

    const checkStateForColor = (id = 0, sendStateBubble, sendStatePhoto, sendStateNote) => {

    }

    const icons = (id) => {
      return (

        <div>
          <Grid container justify="flex-end" style={{ width: 60, marginLeft: 17 }} alignItems="flex-end">

            <Grid item xs={4} ><DialogNoteRooms sendStateNote={sendStateNote} id={id} checkStateForColor={checkStateForColor} /></Grid>
            <Grid item xs={4}><DialogPhoto sendStatePhoto={sendStatePhoto} id={id} checkStateForColor={checkStateForColor} /></Grid>
            <Grid item xs={4}><DialogRoomsBubble sendStateBubble={sendStateBubble} id={id} checkStateForColor={checkStateForColor} /></Grid>

          </Grid>
        </div>
      );
    }

    const displayIcons = (id) => {
      let newArrayOfRows = new Array();
      let rows_ = this.state.rows;
      rows_.forEach(row => {
        if (row.icons !== '')
          row.icons = icons(id);
        newArrayOfRows.push(row);
      });
      this.setState({ rows: newArrayOfRows })
    }


    const fillRows = (data, id) => {
      console.log(id)
      let newRow = createData(id, <RadioButtonCheckedTwoToneIcon className={data.place} style={{ fill: "#c00000", marginRight: -30 }} fontSize="small" />,
        <span style={{ fontSize: 11, display: "inline-block", width: "60px" }} >{data.place}</span>, inline("-"), inline("-"), inline("-"), inline("-"), displayIcons(id));
      let rows_ = this.state.rows;
      rows_.push(newRow);
      this.setState({ rows: rows_ });
    }

    if (this.state.inicialState) {
      {
        displayIcons();
        this.setState({ inicialState: false })
      }
    }
    return (
      <React.Fragment>


        <Title>Rooms <EditOutlinedIcon /><BlurOnIcon /></Title>
        <div style={{ marginLeft: -25, marginRight: 80 }}> <Table size="small">
          <TableHead>

            <TableRow>

              <TableCell className={classes.root}> </TableCell>
              <TableCell className={classes.root}> </TableCell>
              <TableCell className={classes.root} align="right"><span style={{ marginRight: 12, fontSize: 13 }}>L</span></TableCell>
              <TableCell className={classes.root} align="right"><span style={{ marginRight: 12, fontSize: 13 }}>W</span></TableCell>
              <TableCell className={classes.root} align="right" ><span style={{ marginRight: 12, fontSize: 13 }}>H</span></TableCell>
              <TableCell className={classes.root} align="right"><span style={{ fontSize: 13 }}>L x W</span></TableCell>
              <TableCell className={classes.root} align="right"></TableCell>

            </TableRow>

          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right" className={classes.tableCell}>{row.icon}</TableCell>
                <TableCell className={classes.root}>{row.firstColumn}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.l}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.w}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.h}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.lxH}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.icons}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>

        </div>
        <DialogAddRoom fillRows={fillRows} id={this.state.rows.length} displayIcons={displayIcons} />




      </React.Fragment>
    );
  };
}


export default withStyles(styles)(Rooms);