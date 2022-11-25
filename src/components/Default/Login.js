import React from 'react'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

function Login() {

    const { instance } = useMsal();

    function handleLogin(loginType) {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <div id="Container">
            <h1>Inloggen</h1>
            <button onClick={() => handleLogin("popup")}>Login bij Kwetter</button>
        </div >
    )
}

export default Login