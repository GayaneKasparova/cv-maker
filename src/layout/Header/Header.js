import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const Header = (props) => {
    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h5">CV Maker</Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    )
}

export default Header