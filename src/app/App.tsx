import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {Navigation} from "../components/Navigation/Navigation";
import {Container} from "reactstrap";
import {About} from "../pages/About/About";
import {Error404} from "../pages/404/Error404";
import {Contacts} from "../pages/Contacts/Contacts";

function App() {

    return (
        <Container>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"home"} element={<Home/>}/>
                <Route path={"contacts"} element={<Contacts/>}/>
                <Route path={"about"} element={<About/>}/>
                <Route path={"404"} element={<Error404/>}/>
                <Route path={"/*"} element={<Navigate to={"404"}/>}/>
            </Routes>
        </Container>
    )
}

export default App;
