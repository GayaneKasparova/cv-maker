import React, {useCallback, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {STORE_PERSONAL_INFO} from '../../actions/actions'
import {DataDispatchContext, DataStateContext} from "../../context/dataContextProvider";
import serializeInputData from "../../helpers/serializeInputData";

const PersonalInfoForm = () => {
    const dataState = useContext(DataStateContext);
    const dataDispatch = useContext(DataDispatchContext);

    const storeData = useCallback((event) => {
            const inputData = serializeInputData(event);
            dataDispatch({
                type: STORE_PERSONAL_INFO,
                data: inputData
            });
        }
    );

    console.log(dataState)
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
                        onBlur={storeData}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="email"
                        label="Email"
                        variant={"outlined"}
                        onBlur={storeData}
                    />
                </Grid>
            </Grid>
        </form>
    );
}

export default PersonalInfoForm