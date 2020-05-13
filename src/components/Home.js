import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeEasySteps from "./HomeEasySteps"
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import HomeContact from "./HomeContact";

export default function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeEasySteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <HomeContact/>
        </>
    )
}