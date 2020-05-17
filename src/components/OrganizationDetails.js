import React, {useState} from "react";

export default function FoundationDetails() {
    const [showSectionFirst, setShowSectionFirst] = useState("block");
    const [showSectionSecond, setShowSectionSecond] = useState("none");
    const [borderPageOne, setBorderPageOne] = useState("1px solid black")
    const [borderPageTwo, setBorderPageTwo] = useState("none")


    const borderOne = {
        border: borderPageOne
    }
    const borderTwo = {
        border: borderPageTwo
    }


    const sectionFirstStyle = {
        display: showSectionFirst
    }
    const sectionSecondStyle = {
        display: showSectionSecond
    }
    const firstPageClick = () => {
        setShowSectionFirst("block")
        setShowSectionSecond("none")
        setBorderPageOne("1px solid black")
        setBorderPageTwo("none")
    }
    const secondPageClick = () => {
        setShowSectionFirst("none")
        setShowSectionSecond("block")
        setBorderPageOne("none")
        setBorderPageTwo("1px solid black")
    }
    return (
        <>
            <p className="textHead">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <section style={sectionFirstStyle}>
                <div className="detailsDiv">
                    <div>
                        <h3>Organizacja “Lorem Ipsum 1”</h3>
                        <span>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                    </div>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div>
                    <div className="detailsDiv">
                        <div>
                            <h3>Organizacja “Lorem Ipsum 1”</h3>
                            <span>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div>
                    <div className="detailsDiv" id="withoutBorder">
                        <div>
                            <h3>Organizacja “Lorem Ipsum 1”</h3>
                            <span>Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                        </div>
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>
            </section>

            <section style={sectionSecondStyle}>
                <div className="detailsDiv">
                    <div>
                        <h3>What is Lorem Ipsum?</h3>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <p>Ut, aliquam, purus, sit, amet</p>
                </div>
                <div>
                    <div className="detailsDiv">
                        <div>
                            <h3>Where does it come from?</h3>
                            <span>There are many variations of passages of Lorem Ipsum available</span>
                        </div>
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
                <div>
                    <div className="detailsDiv" id="withoutBorder">
                        <div>
                            <h3>Where can I get some?</h3>
                            <span>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</span>
                        </div>
                        <p>The first line of Lorem Ipsum</p>
                    </div>
                </div>
            </section>

            <button style={borderOne} className="buttonsNumbers" onClick={firstPageClick}>1</button>
            <button style={borderTwo} className="buttonsNumbers" onClick={secondPageClick}>2</button>

        </>
    )
}