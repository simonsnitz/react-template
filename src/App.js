import React from 'react';
import { Container } from 'react-bootstrap';

import Nav from "./NavBar/Nav.js";
import Home from './Pages/Home.js';

import NavProvider from './NavBar/NavContext';

// import { Routes, Route } from "react-router-dom";

import "css/main.css";

    export default function App() {

    return(


        <Container fluid>

            <NavProvider>

                <Nav />

                <Home/>
            
            </NavProvider>


        </Container>

    );

    }