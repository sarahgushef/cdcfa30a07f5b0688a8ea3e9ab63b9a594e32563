import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import address from 'data/address.json';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    listWrapper: {
        paddingLeft: '7%',
        paddingRight: '7%',
    },

    textField: {
        width: '100%',
    },

    locationIcon: {
        color: 'red',
    },

    listTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return (
        <Slide
            direction='up'
            ref={ref}
            {...props}
            style={{ marginTop: '150px' }}
        />
    );
});

function LocationModal(props) {
    const classes = useStyles();
    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState(address);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleKeyUp = (event) => {
        event.preventDefault();

        const filteredLocation = address.filter((address) =>
            address.place.toLowerCase().includes(input.toLowerCase())
        );

        setSearchInput(filteredLocation);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
                onClose={props.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge='end'
                            color='inherit'
                            onClick={props.handleClose}
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container className={classes.listWrapper}>
                    <form onKeyUp={handleKeyUp}>
                        <p className={classes.listTitle}>
                            Cek makanan yang tersedia di lokasi kamu!
                        </p>
                        <TextField
                            className={classes.textField}
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LocationOnIcon
                                            className={classes.locationIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            value={input}
                            onChange={handleChange}
                        />
                    </form>

                    <List>
                        {searchInput.map((input) => (
                            <div key={input.id}>
                                <ListItem button>
                                    <LocationOnIcon />
                                    <ListItemText
                                        primary={input.place}
                                        secondary={input.address}
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Container>
            </Dialog>
        </div>
    );
}

export default LocationModal;
