import React from "react";
import {Link} from "react-router-dom";
import ScrollNav from "./ScrollNav";
import SignOutButton from "./SignOut";
import { withFirebase  } from './Firebase'


function NavAfterLogIn({ firebase }) {
    return (
        <>
            <div className="headerNav">
                <div className="loginDiv">
                    <span>Cześć {firebase.getCurrentUser()}</span>
                    <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
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

export default withFirebase(NavAfterLogIn)