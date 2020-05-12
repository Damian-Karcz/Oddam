import React from "react";
import {Link} from "react-router-dom";
// import {Link} from "react-scroll"
import ScrollNav from "./ScrollNav";


export default function HomeNav() {
    return (
        <>
                <div className="headerNav">
                    <div className="loginDiv">
                        <Link to="/login">Zaloguj</Link>
                        <Link to="/rejestracja">Załóż konto</Link>
                    </div>
                    <div className="navDiv">
                        <Link to="/">Start</Link>
                        <ScrollNav/>
                    </div>
                </div>
        </>
    )
}