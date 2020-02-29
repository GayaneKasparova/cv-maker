import React from "react";
import Container from "@material-ui/core/Container";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import Typography from "@material-ui/core/Typography";

const Footer = () => {
    return (
        <footer className="MuiAppBar-colorPrimary" style={{
            width: "100%",
        }}>
            <Container>
                <Typography style={{
                    display: "flex",
                    padding: "15px 30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <span>Made with</span>
                    <FavoriteTwoToneIcon
                        color="secondary"
                        style={{
                            margin: "0 5px"
                        }}/>
                    <span>by Gayane Kasparova</span>
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer