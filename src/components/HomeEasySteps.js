import React from 'react';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import shirtIcon from "../assets/Icon-1.svg";
import bagIcon from "../assets/Icon-2.svg";
import searchIcon from "../assets/Icon-3.svg";
import loadIcon from "../assets/Icon-4.svg";

export default function HomeEasySteps() {
    return (
        <>
            <main id="fourStepSection">
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt="Decoration Border"/>
                <div className="fourStepsDiv">
                    <div className="oneStep">
                        <img src={shirtIcon} alt="T-shirt Icon"/>
                        <h2>Wybierz rzeczy</h2>
                        <div className="border"></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="oneStep">
                        <img src={bagIcon} alt="Bag Icon"/>
                        <h2>Spakuj je</h2>
                        <div className="border"></div>
                        <p>korzystaj z worków na śmieci</p>
                    </div>
                    <div className="oneStep">
                        <img src={searchIcon} alt="Search Icon"/>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <div className="border"></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="oneStep">
                        <img src={loadIcon} alt="Load Icon"/>
                        <h2>Zamów kuriera</h2>
                        <div className="border"></div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button className="buttonsHeader"><Link to="/login"/> Oddaj rzeczy</button>
            </main>
        </>
    )
}