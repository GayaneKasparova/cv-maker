import React from 'react';
import { useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const PersonalInfoForm = () => {
    return (
        <form action="">
            <Grid
                container
                spacing={5}>
                <Grid item xs>
                    <TextField
                        id="fullName"
                        label="Full name"
                        variant={"outlined"}
                        onInput={storeInputValue}/>
                </Grid>
                <Grid item xs>
                    <TextField
                        id="email"
                        label="Email"
                        variant={"outlined"}/>
                </Grid>
            </Grid>
        </form>
    );
}

export default PersonalInfoForm