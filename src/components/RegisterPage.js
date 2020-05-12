import React from 'react';
import HomeNav from "./HomeNav";
import decoration from "../assets/Decoration.svg";

export default function RegisterPage() {
    return (
        <>

            <HomeNav/>
            <div className="loginPageDiv">
                <h1>Załóż konto</h1>
                <img src={decoration} alt="Decoration Border"/>
                <div className="logInFormDiv">
                    <form className="logInForm">
                        <label>Email
                            <input type="email"/>
                        </label>
                        <label>Hasło
                            <input type="password"/>
                        </label>
                        <label>Powtórz hasło
                            <input type="password"/>
                        </label>
                    </form>
                </div>
                <div className="logInButtons">
                    <button>Zaloguj się</button>
                    <button>Załóż konto</button>
                </div>
            </div>

        </>
    )
}