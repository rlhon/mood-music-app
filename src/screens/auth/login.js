import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
    return (
        <div class = "login-page">
            <a href={loginEndpoint}>
                <div className = "login-btn"> Log In</div>
            </a>
        </div>
    );
}