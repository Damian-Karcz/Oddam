import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeEasySteps from "./HomeEasySteps"
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import HomeContact from "./HomeContact";
import NavAfterLogIn from "./NavAfterLogIn";
import HomeHeaderAfterLogIn from "./HomeHeaderAfterLogIn";

export default function PageAfterLogin() {
    return (
        <>
            <HomeHeaderAfterLogIn/>
            <HomeThreeColumns/>
            <HomeEasySteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <HomeContact/>
        </>
    )
}