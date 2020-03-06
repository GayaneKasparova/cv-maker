import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Header from "./layout/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./layout/Footer/Footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
