import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login, Main} from "./pages";
import React from "react";
import PrivateRoute from "./context/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthProvider";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>
                    </Route>
                </Routes>

            </AuthProvider>
        </Router>
    )
}

export default App;