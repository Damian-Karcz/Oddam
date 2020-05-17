import React from "react";
import HomeNav from "../HomeNav";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export default function SignOutLayout() {
    return (
        <>
            <main className="logoutLayout">
                <HomeNav/>
                <div className="loginPageDiv">
                    <h1>Wylogowanie nastąpiło <br/>pomyślnie</h1>
                    <img src={decoration} alt="Decoration Border"/>
                </div>
                <Link to="/"><button className="buttonsHeader">Strona główna</button></Link>
            </main>
        </>
    )
}