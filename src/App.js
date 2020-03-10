import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Header from "./layout/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./layout/Footer/Footer";
import './App.css';
import DataContextProvider from "./context/dataContextProvider";

const App = () => {
    return (
        <div className="App">
            <DataContextProvider>
                <CssBaseline/>
                <Header/>
                <Main/>
                <Footer/>
            </DataContextProvider>

        </div>
    );
}

export default App;
