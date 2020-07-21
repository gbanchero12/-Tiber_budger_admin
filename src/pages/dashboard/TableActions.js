import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Generate Order Data







const styles = theme => ({
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
});



class TableActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }

    const { classes } = props;

  }

  render() {
    const { classes, newActionsRows } = this.props;
    this.state.rows = newActionsRows;
    return (


      <div>
        <React.Fragment>



          <Table size="small">
            <TableHead>
              <TableRow>
              <TableCell className={classes.titles}>  </TableCell>
                <TableCell className={classes.titles}> DESCRIPTION </TableCell>
                <TableCell className={classes.titles} align="right">ITEM AMT.</TableCell>
                <TableCell className={classes.titles} align="right">QTY.</TableCell>
                <TableCell className={classes.titles} align="right">TOTAL</TableCell>
                <TableCell className={classes.titles} align="right">SCOPE / NOTES</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row) => (
                <TableRow key={row.id}>
                   <TableCell className={classes.tableAction}> <FiberManualRecordIcon style={{ fill: "#049ce4" }} fontSize="small" /> </TableCell>
                  <TableCell className={classes.tableAction} style={{ fontSize: 10 }}>{row.description}</TableCell>
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
  };
}


export default withStyles(styles)(TableActions);