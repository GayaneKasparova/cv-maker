import AccountIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {GiAchievement} from "react-icons/gi"
import clsx from "clsx";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import StepConnector from "@material-ui/core/StepConnector";

function ColorlibStepIcon(props) {
    const styles = makeStyles({
        root: {
            backgroundColor: '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateX(-10px)'
        },
        active: {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    });
    const classes = styles();
    const {active, completed} = props;

    const icons = {
        1: <AccountIcon/>,
        2: <GiAchievement/>,
        3: <SchoolIcon/>,
        4: <WorkIcon/>,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const coloredConnector = {
    '& >[class*="line"]': {
        borderImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        borderImageSlice: '1',
        borderWidth: 3
    }
}

const ColorlibConnector = withStyles({
    completed: coloredConnector,
    active: coloredConnector,
})(StepConnector);

export {ColorlibStepIcon, ColorlibConnector}