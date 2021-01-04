import React, { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        backgroundColor: theme.palette.background,
        padding: 15,
    },
}));

function SuccessAlert() {
    const [_open, _setOpen] = useState(true);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Collapse in={_open}>
                <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            _setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <AlertTitle>Success!</AlertTitle>
                    Item was added to your basket!
                </Alert>
            </Collapse>       
        </div>
    )
}

export default SuccessAlert;