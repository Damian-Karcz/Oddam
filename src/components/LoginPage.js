import React from 'react';
import HomeNav from "./HomeNav";
import decoration from "../assets/Decoration.svg";

export default function LoginPage() {
    return (
        <>

                <HomeNav/>
                <div className="loginPageDiv">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="Decoration Border"/>
                    <div className="logInFormDiv">
                        <form className="logInForm">
                            <label>Email
                                <input type="email"/>
                            </label>
                            <label>Hasło
                                <input type="password"/>
                            </label>
                        </form>
                    </div>
                    <div className="logInButtons">
                        <button>Załóż konto</button>
                        <button>Zaloguj się</button>
                    </div>
                </div>

        </>
    )
}