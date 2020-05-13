import React from "react";
import HomeNav from "../HomeNav";
import decoration from "../../assets/Decoration.svg";

export default function SignOutLayout() {
    return (
        <>
            <main className="logoutLayout">
                <HomeNav/>
                <div className="loginPageDiv">
                    <h1>Wylogowanie nastąpiło <br/>pomyślnie</h1>
                    <img src={decoration} alt="Decoration Border"/>

                </div>
                <button className="buttonsHeader">Strona główna</button>
            </main>
        </>
    )
}