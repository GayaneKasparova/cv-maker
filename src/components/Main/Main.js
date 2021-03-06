import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import {Button, Typography} from "@material-ui/core";
import FormStepper from "../FormStepper/FormStepper"

const Main = () => {
    const [startPoint, setStartPoint] = useState(true);
    return (
        <main>
            <Container style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {
                    startPoint ?
                        <>
                            <Typography
                                component="h1"
                                variant="h2"
                                color="secondary"
                            >Create professional CV in few easy steps</Typography>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                style={{
                                    margin: "30px auto"
                                }}
                                autoFocus={true}
                                onClick={() => setStartPoint(false)}>
                                Get Started
                            </Button>
                        </>
                    : <FormStepper/>
                }
            </Container>
        </main>
    )
}

export default Main