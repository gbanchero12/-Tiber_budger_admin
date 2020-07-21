import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { InputBase, Button, Box, Typography, TextField, FormControlLabel, Switch, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import TableActions from './TableActions'
import DialogAddAction from './Dialogs/DialogAddAction';
import Actions from './Actions';

const rows = [
  createData(0, 'Budget Amount', "$54,600.51", "$-"),
  createData(1, 'Material (THD)', "$12,585.03", "$-"),
  createData(2, 'By Area (GC)', "$11,800.00", "$-"),
  createData(3, 'Vendor(s)', "$30,215.48", "$-"),
];

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const styles = theme => ({
  root: {
    borderBottom: "none",
  },
  tableCell: {
    borderBottom: "none"
  },
  tableAction: {
    color: '#049ce4',
    border: "1"
  },
  margin: {
    margin: theme.spacing(1),
  },
  searchIcon: {
    color: "#049ce4"
  },
  addIcon: {
    color: 'white'
  },
  btnAdd: {
    background: '#049ce4',
    marginRight: theme.spacing(1),
  },
  switch: {
    marginTop: theme.spacing(2)
  }
});


class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
    
  }

render(){
  const { classes } = this.props;
  return (
    <div>
      <React.Fragment>



        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.root}> <Title>Budget</Title></TableCell>
              <TableCell className={classes.root} align="right">Estimated</TableCell>
              <TableCell className={classes.root} align="right">Actual</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.root}>{row.date}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.name}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.shipTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </React.Fragment>
      <Actions />
    </div>
  );};
}


export default withStyles(styles)(Budget);




