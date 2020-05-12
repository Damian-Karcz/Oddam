import React from 'react';
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg"

export default function AboutUs() {
    return (
        <>
            <main id="aboutAsSection">
                <div className="aboutUsTextDiv">
                    <div className="textDiv">
                        <h1>O nas</h1>
                        <img src={decoration} alt="Decoration Border"/>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={signature} alt="Signature"/>
                    </div>

                </div>
                <div className="aboutUsPhoto">

                </div>
            </main>
        </>
    )
}