import React, {useState} from "react";
import decoration from "../assets/Decoration.svg";
import FoundationDetails from "./FoundationDetails";
import OrganizationDetails from "./OrganizationDetails";

export default function WhoWeHelp() {
    const [showDivFoundation, setShowDivFoundation] = useState("block");
    const [showDivOrganization, setShowDivOrganization] = useState("none");
    const [showDivLocal, setShowDivLocal] = useState("none");
    const [borderStyle, setBorderStyle] = useState("1px solid black")
    const [borderOrg, setBorderOrg] = useState("none")
    const [borderLoc, setBorderLoc] = useState("none")

    const foundationsStyles = {
        display: showDivFoundation,
    }
    const organizationsStyles = {
        display: showDivOrganization
    }
    const localStyles = {
        display: showDivLocal
    }

    const borderFoundation = {
        border: borderStyle
    }
    const borderOrganization = {
        border: borderOrg
    }
    const borderLocal = {
        border: borderLoc
    }


    const foundationClick = () => {
        setShowDivFoundation("block")
        setShowDivOrganization("none")
        setShowDivLocal("none")
        setBorderStyle("1px solid black")
        setBorderOrg("none")
        setBorderLoc("none")
    }

    const organizationClick = () => {
        setShowDivOrganization("block")
        setShowDivFoundation("none")
        setShowDivLocal("none")
        setBorderStyle("none")
        setBorderStyle("none")
        setBorderOrg("1px solid black")
        setBorderLoc("none")
    }

    const localClick = () => {
        setShowDivOrganization("none")
        setShowDivFoundation("none")
        setShowDivLocal("block")
        setBorderStyle("none")
        setBorderOrg("none")
        setBorderLoc("1px solid black")
    }





    return (
        <>
            <main id="whoWeHelpSection">
                <h1>Komu pomagamy</h1>
                <img src={decoration} alt="Decoration Border"/>
                <div className="buttonsWhoWeHelp">
                    <button className="buttonHelp" style={borderFoundation} onClick={foundationClick}>Fundacjom</button>
                    <button className="buttonHelp" style={borderOrganization} onClick={organizationClick}>Organizacjom pozarządowym</button>
                    <button className="buttonHelp" style={borderLocal} onClick={localClick}>Lokalnym zbiórką</button>
                </div>
                <div className="foundationsDiv" style={foundationsStyles}>
                    <FoundationDetails/>
                </div>
                <div className="organizationsDiv" style={organizationsStyles}>
                    <OrganizationDetails/>
                </div>
                <div className="localDiv" style={localStyles}>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <div>1

                    </div>
                    <div>2

                    </div>
                    <div>3

                    </div>
                </div>
            </main>
        </>
    )
}