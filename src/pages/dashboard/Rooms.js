import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import RadioButtonCheckedTwoToneIcon from '@material-ui/icons/RadioButtonCheckedTwoTone';
import { Box, Link } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DialogRoomsBubble from './Dialogs/DialogRoomsBubble';
import DialogPhoto from './Dialogs/DialogPhoto';

// Generate Order Data
function createData(id, icon, firstColumn, l, w, h, lxH, icons) {
  return { id, icon, firstColumn, l, w, h, lxH, icons };
}

const rows = [
  createData(0, <RadioButtonCheckedTwoToneIcon style={{ fill: "#c00000" }} fontSize="small" />,
    'Living Room', inline("12"), inline("14"), inline("7"), inline("168"), displayIcons()),
  createData(1, <RadioButtonCheckedTwoToneIcon style={{ fill: "#f5b201" }} fontSize="small" />,
    'Kitchen', inline("12"), inline("14"), inline("7"), inline("168"), displayIcons()),
  createData(2, <FiberManualRecordIcon style={{ fill: "#129e00" }} fontSize="small" />,
    'Bedroom 1', inline("12"), inline("14"), inline("7"), inline("168"), displayIcons()),
  createData(3, <RadioButtonCheckedTwoToneIcon style={{ fill: "#c00000" }} fontSize="small" />,
    'Bedroom 2', inline(" - "), inline(" - "), inline(" - "), inline(" - "), displayIcons()),
  createData(3, <Link color="primary" href="#" onClick={preventDefault}>+ Add room</Link>,
    "", "", "", "", "", ""),
];

function inline(text) {
  return (
    <div>
      <Box component="div" style={{width: "30px", fontSize:"10px"}} p={0.5} m={-1} border={1} borderColor="grey.500">
        {text}
      </Box>

    </div>
  );
}

function displayIcons() {
  return (
    <div>
      <DialogRoomsBubble/>
      <DialogPhoto/>
      <AssignmentIcon fontSize="small"/>
    </div>
  );
}

function preventDefault(event) {
  console.log("EDIT")
  event.preventDefault();
}


const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "none"
  },
  tableCell: {
    borderBottom: "none"
  },
}));

export default function Rooms() {
  const classes = useStyles();
  return (
    <React.Fragment>



      <Table size="small">
        <TableHead>


          <TableRow>
            <Title>Rooms <EditOutlinedIcon /><BlurOnIcon /></Title>
            <TableCell className={classes.root}> </TableCell>
            <TableCell className={classes.root} align="right">L</TableCell>
            <TableCell className={classes.root} align="right">W</TableCell>
            <TableCell className={classes.root} align="right">H</TableCell>
            <TableCell className={classes.root} align="right">L x W</TableCell>
            <TableCell className={classes.root} align="right"></TableCell>

          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
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




    </React.Fragment>
  );
}
