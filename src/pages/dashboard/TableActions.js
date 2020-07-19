import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Generate Order Data
function createData(id, description, item, qty, total, scope) {
  return { id, description, item, qty, total, scope };
}




const rows = [
  createData(0, <div><FiberManualRecordIcon style={{ fill: "#049ce4", marginBottom: "-3px"}} fontSize="small" />Landscaping</div>, "$" + 50, 1,"$" + 50, "trim"),
  createData(1, <div><FiberManualRecordIcon style={{ fill: "#049ce4", marginBottom: "-3px"}} fontSize="small" />Look Change</div>, "$" + 120, 1,"$" + 120, "look change"),
  createData(2, <div><FiberManualRecordIcon style={{ fill: "#049ce4", marginBottom: "-3px"}} fontSize="small" />Landscaping</div>, "$" + 50, 1,"$" + 50),
  createData(3, <div><FiberManualRecordIcon style={{ fill: "#049ce4", marginBottom: "-3px"}} fontSize="small" />Look Change</div>, "$" + 120, 1,"$" + 120),
];

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "none"
  },
  tableAction: {
    border: "1"
  },
  titles: {
      fontSize: "9px",
      border: "1",
      color: '#999'
  },
  tableCell: {
      fontSize: "10px"
  }
}));

export default function TableActions() {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>



        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.titles}> DESCRIPTION </TableCell>
              <TableCell className={classes.titles} align="right">ITEM AMT.</TableCell>
              <TableCell className={classes.titles} align="right">QTY.</TableCell>
              <TableCell className={classes.titles} align="right">TOTAL</TableCell>
              <TableCell className={classes.titles} align="right">SCOPE / NOTES</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableAction}>{row.description}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.item}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.qty}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.total}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row.scope}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </React.Fragment>
   
    </div>
  );
}


