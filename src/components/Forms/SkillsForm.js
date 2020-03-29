import React, {useContext, useRef} from 'react';
import {STORE_SKILLS, DELETE_SKILLS} from '../../actions/actions'
import {DataDispatchContext, DataStateContext} from "../../context/dataContextProvider";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const SkillsForm = () => {
    const dataDispatch = useContext(DataDispatchContext);
    const addedSkills = useContext(DataStateContext).skills;
    const skillsInput = useRef(null);

    const addSkill = () => {
        const inputData = skillsInput.current.querySelector('input').value;
        inputData && dataDispatch({
            type: STORE_SKILLS,
            data: inputData
        });
        skillsInput.current.querySelector('input').value = '';
    }

    const keyPressed = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addSkill();
        }
    }

    const deleteSkill = (index) => {
        dataDispatch({
            type: DELETE_SKILLS,
            data: index
        });
    }

    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: '15px',
            padding: '2px 5px',
            display: 'flex',
            alignItems: 'center',
        },
        chips: {
            marginTop: '15px',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        chip: {
            margin: '3px'
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }));

    const classes = useStyles();

    return (
        <>
            {
                addedSkills.length ?
                    <div className={classes.chips}>
                        {
                            addedSkills.map((skill, index) => {
                                return <Chip
                                    key={index}
                                    className={classes.chip}
                                    label={skill}
                                    onDelete={() => deleteSkill(index)}
                                    variant="outlined"
                                    color="primary"
                                />
                            })
                        }
                    </div> : ''
            }
            <form>
                <Grid
                    container
                    spacing={5}>
                    <Grid item xs={12} className={classes.root}>
                        <TextField
                            className={classes.input}
                            placeholder="Add skills"
                            autoFocus={true}
                            formControl={true}
                            ref={skillsInput}
                            id="skills"
                            onKeyPress={keyPressed}
                        />
                        <IconButton
                            className={classes.iconButton}
                            color="primary"
                            aria-label="skills"
                            onClick={addSkill}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default SkillsForm