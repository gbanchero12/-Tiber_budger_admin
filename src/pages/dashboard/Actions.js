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
import { render } from 'react-dom';
import { HandleChange } from '../../Functions/Functions';




function createData(id, description, item, qty, total, scope) {
    return { id, description, item, qty, total, scope };
}

const TypesArrange = [{ value: 1, label: 'Recently Added' }]







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







class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            newActionsRows: [],
            search: '',
            firstSearch: true,
        }

    }




    render() {
        const { classes } = this.props;



        const addAction = (data) => {
            let id = this.state.newActionsRows.length;
            data.id = id;
            let newActionsRows_ = this.state.newActionsRows;
            console.log(newActionsRows_);
            newActionsRows_.unshift(createData(data.id, data.actionDetails + " / " +  data.roomType, data.amount, 1, data.amount, data.scope));

            this.setState({ newActionsRows: newActionsRows_ });

            console.log(this.state.newActionsRows);
        }

        const toggleChecked = () => {
            let list = this.state.newActionsRows;
            if (Array.isArray(list))
                list.reverse();

            this.setState({ newActionsRows: list })
        }

        const filter = () => {
            let list = this.state.newActionsRows;
            let filtered = new Array();

            if (this.state.firstSearch) {
                this.setState({
                    rows: list,
                    firstSearch: false
                });
            }
            
            if (Array.isArray(list)) {
                var PATTERN = this.state.search.toLocaleUpperCase();
                filtered = list.filter(function (str) { return str.description.toLocaleUpperCase().includes(PATTERN); });
            }

            this.setState({ newActionsRows: filtered })

            if (this.state.search.length === 0 || this.state.search.length === 1 || this.state.search.length === 2 || this.state.search.length === 3) {
                this.setState({ newActionsRows: this.state.rows })
            }
        }

        const handleSearch = (event) => {
            HandleChange(event, this);
            console.log(this.state.search)
            filter();
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
                            <TableCell align="left"><DialogAddAction addAction={addAction} classes={classes} /></TableCell>
                            <TableCell align="right">
                                <InputBase
                                    className={classes.margin}
                                    inputProps={{ 'aria-label': 'naked' }}
                                    placeholder="Search..."
                                    onChange={handleSearch}
                                    name="search"
                                />
                                <Button onClick={filter}>
                                    <SearchIcon fontSize="small" className={classes.searchIcon} />
                                </Button>
                            </TableCell>
                        </TableRow>

                        <TableRow  >
                            <TableCell align="left">{this.state.newActionsRows.length} actions</TableCell>
                            <TableCell align="right">

                                <TextField
                                    id="arrange"
                                    margin="dense"
                                    size="small"
                                    variant="standard"
                                    //value={this.state.servicio}
                                    //onChange={onChange}
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
                                    control={<Switch size="small" color="primary" onChange={toggleChecked} />}
                                    label="Ascending"
                                    labelPlacement="start"
                                />
                            </TableCell>

                        </TableRow>

                    </TableHead>
                </Table>
                <TableActions newActionsRows={this.state.newActionsRows} />

            </React.Fragment>
        );
    };
}


export default withStyles(styles)(Actions);