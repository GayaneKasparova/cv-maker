import React, {useContext} from "react";
import {DataDispatchContext, DataStateContext} from "../../context/dataContextProvider";
import {Paper} from "@material-ui/core";

const Result = () => {
    const data = useContext(DataStateContext);
    const personalInfo = data.personalInfo;
    const skills = data.skills;
    return (
        <Paper>
            <h1>{personalInfo.fullName}</h1>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <ul>
                {
                    skills.map(skill=> {
                        return <li>{skill}</li>
                    })
                }
            </ul>
        </Paper>
    );
}

export default Result