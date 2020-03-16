import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {STORE_SKILLS, DELETE_SKILLS} from '../../actions/actions'
import {DataDispatchContext, DataStateContext} from "../../context/dataContextProvider";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {makeStyles} from "@material-ui/core/styles";

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
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }));

    const classes = useStyles();

    return (
        <>
            <div>
                {
                    addedSkills && addedSkills.map((skill, index) => {
                        return <Chip
                            key={index}
                            label={skill}
                            onDelete={() => deleteSkill(index)}
                        />
                    })
                }
            </div>
            <Paper
                component="form"
                className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Add skills"
                    inputProps={{'skills': 'search google maps'}}
                    ref={skillsInput}
                    id="skills"
                    onKeyPress={keyPressed}
                />
                <Divider
                    className={classes.dividor}
                    orientation="vertical"/>
                <IconButton
                    className={classes.iconButton}
                    color="primary"
                    aria-label="skills"
                    onClick={addSkill}>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </Paper>
        </>
    );
}

export default SkillsForm