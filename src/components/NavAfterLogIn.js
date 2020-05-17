import React from "react";
import {Link} from "react-router-dom";
import ScrollNav from "./ScrollNav";
import SignOutButton from "./SignOut";
import { withFirebase  } from './Firebase'
import * as ROUTES from "../constants/routes";


function NavAfterLogIn({ firebase }) {
    return (
        <>
            <div className="headerNav">
                <div className="loginDiv">
                    <span>Cześć {firebase.getCurrentUser()}</span>
                    <Link to={ROUTES.ITEMS}>Oddaj rzeczy</Link>
                    <Link to={ROUTES.SIGN_OUT}><SignOutButton/></Link>
                </div>
                <div className="navDiv">
                    <Link to={ROUTES.HOME}>Start</Link>
                    <ScrollNav/>
                </div>
            </div>
        </>
    )
}

export default withFirebase(NavAfterLogIn)