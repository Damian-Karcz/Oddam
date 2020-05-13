import React from "react";
import {Link} from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
import NavAfterLogIn from "./NavAfterLogIn";


export default function HomeHeaderAfterLogIn() {
    return (
        <>
            <div className="headerContainer">
                <div className="headerPhoto">

                </div>
                <div className="headerMenu">
                    {/*<div className="headerNav">*/}
                    {/*    <div className="loginDiv">*/}
                    {/*        <Link to="/login">Zaloguj</Link>*/}
                    {/*        <Link to="/register">Załóż konto</Link>*/}
                    {/*    </div>*/}
                    {/*    <div className="navDiv">*/}
                    {/*        <Link to="/">Start</Link>*/}
                    {/*        <Link to="/">O co chodzi?</Link>*/}
                    {/*        <Link to="/">O nas</Link>*/}
                    {/*        <Link to="/">Fundacje i organizacje</Link>*/}
                    {/*        <Link to="/">Kontakt</Link>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <NavAfterLogIn/>
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