import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useInputHandler from "../../actions/useInputHandler";
import {useSelector} from "react-redux";

const PersonalInfoForm = () => {
    const personalInfo = useSelector(state => state);
    console.log(personalInfo)
    return (
        <form action="" datatype="personalInfo">
            <Grid
                container
                spacing={5}>
                <Grid item xs>
                    <TextField
                        id="fullName"
                        label="Full name"
                        variant={"outlined"}
                        onBlur={useInputHandler}/>
                </Grid>
                <Grid item xs>
                    <TextField
                        id="email"
                        label="Email"
                        variant={"outlined"}
                        onInput={useInputHandler}/>
                </Grid>
            </Grid>
        </form>
    );
}

export default PersonalInfoForm