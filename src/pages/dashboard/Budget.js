import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { InputBase, Button, Box, Typography, TextField, FormControlLabel, Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TableActions from './TableActions'
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const TypesArrange = [{ value: 1, label: 'Recently Added' }, { value: 1, label: 'Price' }]



const rows = [
  createData(0, 'Budget Amount', "$54,600.51", "$-"),
  createData(1, 'Material (THD)', "$12,585.03", "$-"),
  createData(2, 'By Area (GC)', "$11,800.00", "$-"),
  createData(3, 'Vendor(s)', "$30,215.48", "$-"),
];



const useStyles = makeStyles((theme) => ({
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
}));

export default function Budget() {
  const classes = useStyles();
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
  );
}

function Actions() {
  const classes = useStyles();

  function preventDefault(event) {
    console.log("EDIT")
    event.preventDefault();
  }


  return (
    <React.Fragment>



      <Table size="small" className={classes.tableAction}>
        <TableHead >
          <TableRow  >
            <TableCell > <Title>Actions</Title></TableCell>
            <TableCell > <Title></Title></TableCell>


          </TableRow>
          <TableRow  >
            <TableCell align="left"><Button className={classes.btnAdd}><AddIcon className={classes.addIcon} /></Button><Link color="primary" href="#" onClick={preventDefault}>Add Action</Link></TableCell>
            <TableCell align="right">
              <InputBase
                className={classes.margin}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Search..."
              />
              <Button onClick={preventDefault}>
                <SearchIcon fontSize="small" className={classes.searchIcon} />
              </Button>
            </TableCell>
          </TableRow>

          <TableRow  >
            <TableCell align="left">2 actions</TableCell>
            <TableCell align="right">

              <TextField
                id="arrange"
                margin="dense"
                variant="outlined"
                //value={this.state.servicio}
                //onChange={onChange}
                placeholder="Arrange By:"
                name="arrange"
                select
                SelectProps={{
                  native: true,
                }}
              //onChange={this.handleChange}
              >
                <option key="-1" value="-1">Arrange By:</option>
                {TypesArrange.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option >
                ))}

              </TextField>

              <FormControlLabel
                className={classes.switch}
                value="Ascending"
                control={<Switch size="small" color="primary" />}
                label="Ascending"
                labelPlacement="start"
              />
            </TableCell>

          </TableRow>

        </TableHead>
      </Table>
      <TableActions />

    </React.Fragment>
  );
}
