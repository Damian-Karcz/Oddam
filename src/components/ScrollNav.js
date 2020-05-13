import React from "react";
import {Link} from "react-scroll"

export default function ScrollNav() {
    return (
        <>
            <Link to="fourStepSection" smooth={true} duration={1500}>O co chodzi?</Link>
            <Link to="aboutAsSection" smooth={true} duration={1500}>O nas</Link>
            <Link to="whoWeHelpSection" smooth={true} duration={1500}>Fundacje i organizacje</Link>
            <Link to="/">Kontakt</Link>
        </>
    )
}