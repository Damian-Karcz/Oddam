import React from "react";
import {Link} from "react-router-dom";
// import {Link} from "react-scroll"
import ScrollNav from "./ScrollNav";
import * as ROUTES from "../constants/routes";
import SignOutButton from "./SignOut";


export default function NavAfterLogIn() {
    return (
        <>
            <div className="headerNav">
                <div className="loginDiv">
                    <Link to="/">email</Link>
                    <Link to="/logout"><SignOutButton/></Link>
                </div>
                <div className="navDiv">
                    <Link to="/">Start</Link>
                    <ScrollNav/>
                </div>
            </div>
        </>
    )
}