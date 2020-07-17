import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Budget Amount', "$54,600.51", "$-"),
  createData(1, 'Material (THD)', "$12,585.03", "$-"),
  createData(2, 'By Area (GC)', "$11,800.00", "$-"),
  createData(3, 'Vendor(s)', "$30,215.48", "$-"),
];



const useStyles = makeStyles((theme) => ({
  root:{
    borderBottom: "none"
  },
  tableCell: {
      color: '#049ce4',
      borderBottom: "none"
  },
}));

export default function Budget() {
  const classes = useStyles();
  return (
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
  );
}
