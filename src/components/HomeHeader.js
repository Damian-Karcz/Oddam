import React from "react";
import {Link} from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
import HomeNav from "./HomeNav";
import { withFirebase  } from './Firebase'
import NavAfterLogIn from "./NavAfterLogIn";

function Home({firebase}) {

    const isUser = firebase.getCurrentUser()
    return (
        <>
            <div className="headerContainer">
                <div className="headerPhoto">

                </div>
                <div className="headerMenu">
                    {isUser ? <NavAfterLogIn/> : <HomeNav/>}
                    <div className="headerHeading">
                        <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </h1>
                        <img src={decoration} alt="Decoration Border"/>
                        <div className="headerButtons">
                            <Link to="/login"><button className="buttonsHeader">Oddaj <br/>rzeczy</button></Link>
                            <Link to="/login"><button className="buttonsHeader">Zorganizuj <br/>zbiórkę</button></Link>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
        export default withFirebase(Home)