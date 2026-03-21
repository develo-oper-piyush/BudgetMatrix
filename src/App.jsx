import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Page from "./components/layout/Page";

const App = () => {
    return (
        <>
            <Page>
                <Home />
            </Page>
        </>
    );
};

export default App;
