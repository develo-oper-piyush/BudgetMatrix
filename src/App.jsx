import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Page from "./components/layout/Page";

const App = () => {
    return (
        <Page>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Page>
    );
};

export default App;
