import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import PersonalInfoForm from "../Forms/PersonalInfoForm";
import SkillsForm from "../Forms/SkillsForm";
import WorkExperienceForm from "../Forms/WorkExperienceForm";
import Result from "../Result/Result";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import {ColorlibStepIcon, ColorlibConnector} from "../common/ColorlibStepIcon";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    stepButton: {
        justifyContent: 'flex-start'
    },
}));

function getSteps() {
    return ['Personal info', 'Skills', 'Work experience', 'Education'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <PersonalInfoForm/>;
        case 1:
            return <SkillsForm/>;
        case 2:
            return <WorkExperienceForm/>;
        default:
            return 'Unknown step';
    }
}

const FormStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [finished, setFinished] = useState(false);
    const [completed, setCompleted] = useState({});
    const steps = getSteps();

    const totalSteps = () => {
        return getSteps().length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        if (!isLastStep()) {
            const newActiveStep = activeStep + 1;
            setActiveStep(newActiveStep);

            const newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
        } else
            setFinished(true);
    };

    const handleBack = () => {
        if (finished) {
            setFinished(false)
        }
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = step => () => {
        setActiveStep(step);
        if (finished) {
            setFinished(false)
        }
    };

    return (
        <div className={classes.root}>
            {
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    connector={<ColorlibConnector/>}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>
                                    <StepButton
                                        className={classes.stepButton}
                                        onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </StepLabel>
                                <StepContent>
                                    {getStepContent(index)}
                                    <div className={classes.actionsContainer}>
                                        {
                                            !finished && <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        }
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
            }
            <div>
                {
                    finished ? (
                        <div>
                            <Result/>
                        </div>
                    ) : ""}
            </div>
        </div>
    );
}

export default FormStepper
