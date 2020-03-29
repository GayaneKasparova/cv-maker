import React from "react";
import Button from "@material-ui/core/Button";
import {PhotoCamera} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    input: {
        display: 'none',
    },
}));


const ImageUpload = (props) => {
    const classes = useStyles();

    return (
        <>
            <input
                accept="image/*"
                className={classes.input}
                id={props.id}
                type="file"
                onChange={props.onChange}/>
            <label htmlFor={props.id}>
                <Button
                    color="primary"
                    aria-label="upload picture"
                    component="span">
                    <PhotoCamera/>  Upload photo
                </Button>
            </label>
        </>
    )
}
export default ImageUpload