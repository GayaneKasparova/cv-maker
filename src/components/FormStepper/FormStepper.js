import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfoForm from "../Forms/PersonalInfoForm";
import WorkIcon from '@material-ui/icons/Work';
import SkillsForm from "../Forms/SkillsForm";
import WorkExperienceForm from "../Forms/WorkExperienceForm";
import Result from "../Result/Result";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal info', 'Skills', 'Work experience', 'Education'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <PersonalInfoForm />;
        case 1:
            return <SkillsForm />;
        case 2:
            return <WorkExperienceForm />;
        default:
            return 'Unknown step';
    }
}

const FormStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const steps = getSteps();

    const totalSteps = () => {
        return getSteps().length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep = activeStep + 1;

        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        if (completed) {
            setCompleted(false)
        };
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = step => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        setCompleted(true);
    };

    return (
        <div className={classes.root}>
            {
                !completed ? <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const buttonProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepButton
                                onClick={handleStep(index)}
                                {...buttonProps}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper> : ''}
            <div>
                {
                    completed ? (
                    <div>
                        <Result />
                        <Button onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                    </div>
                ) : (
                    <div>
                        <div style={{marginTop: '30px'}}>{getStepContent(activeStep)}</div>
                        <div style={{
                            display: 'flex',
                            marginTop: "30px",
                            justifyContent: "center",
                        }}>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button variant="contained" color="primary" onClick={!isLastStep() ? handleNext : handleComplete}>
                                {isLastStep() ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FormStepper
