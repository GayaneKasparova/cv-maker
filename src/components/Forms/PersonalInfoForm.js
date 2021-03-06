import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {STORE_PERSONAL_INFO} from '../../actions/actions'
import {DataDispatchContext, DataStateContext} from "../../context/dataContextProvider";
import serializeInputData from "../../helpers/serializeInputData";
import ImageUpload from "../common/ImageUpolad";

const PersonalInfoForm = () => {
    const {personalInfo} = useContext(DataStateContext);
    const dataDispatch = useContext(DataDispatchContext);

    const storeData = (event) => {
        const inputData = serializeInputData(event);
        dataDispatch({
            type: STORE_PERSONAL_INFO,
            data: inputData
        });
    }

    return (
        <form>
            <Grid
                container
                spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.fullName ? personalInfo.fullName : ''}
                        id="fullName"
                        label="Full name"
                        variant={"outlined"}
                        onInput={storeData}
                        autoFocus={true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.email ? personalInfo.email : ''}
                        id="email"
                        label="Email"
                        variant={"outlined"}
                        onInput={storeData}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.phone ? personalInfo.phone : ''}
                        id="phone"
                        label="Phone number"
                        variant={"outlined"}
                        onInput={storeData}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.website ? personalInfo.website : ''}
                        id="website"
                        label="Website"
                        variant={"outlined"}
                        onInput={storeData}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.addressLine1 ? personalInfo.addressLine1 : ''}
                        id="addressLine1"
                        label="Address line 2"
                        variant={"outlined"}
                        onInput={storeData}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={personalInfo.addressLine2 ? personalInfo.addressLine2 : ''}
                        id="addressLine2"
                        label="Address line 2"
                        variant={"outlined"}
                        onInput={storeData}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={5}>
                <Grid item xs={12} sm={6}>
                    {personalInfo.photo && <img src={personalInfo.photo} alt=""/>}
                    <ImageUpload
                        id='photo'
                        onChange={storeData}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="summary"
                        label="Summary"
                        multiline
                        rowsMax="4"
                        value={personalInfo.summary ? personalInfo.summary : ''}
                        onInput={storeData}
                    />
                </Grid>
            </Grid>
        </form>
    );
}

export default PersonalInfoForm