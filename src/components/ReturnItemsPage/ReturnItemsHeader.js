import React from "react";
import decoration from "../../assets/Decoration.svg";
import { withFirebase  } from '../Firebase'
import NavAfterLogIn from "../NavAfterLogIn";

function ReturnItemsHeader({firebase}) {

    // const isUser = firebase.getCurrentUser()
    return (
        <>
            <div className="headerContainer">
                <div className="returnHeaderPhoto">
                </div>
                <div className="headerMenu">
                    <NavAfterLogIn/>
                    <div className="headerHeadingReturn">
                        <h1>Oddaj rzeczy, których już nie chcesz  <br/> POTRZEBUJĄCYM </h1>
                        <img src={decoration} alt="Decoration Border"/>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className="fourStepsHeaderDiv">
                            <div className="fourSteps">
                                <h3>1</h3>
                                <p>Wybierz<br/>rzeczy</p>
                            </div>
                            <div className="fourSteps">
                                <h3>2</h3>
                                <p>Spakuj je<br/>w worki</p>
                            </div>
                            <div className="fourSteps">
                                <h3>3</h3>
                                <p>Wybierz <br/>fundację</p>
                            </div>
                            <div className="fourSteps">
                                <h3>4</h3>
                                <p>Zamów <br/> kurier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default withFirebase(ReturnItemsHeader)