import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";

import LandingPage from "./pages/landing/LandingPage"
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import FormValidation from "./pages/auth/FormValidation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/formvalidation" element={<FormValidation />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
