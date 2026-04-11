import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import ComingSoon from "./components/pages/ComingSoon";
import Page from "./components/layout/Page";

const App = () => {
    return (
        <Page>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
        </Page>
    );
};

export default App;
