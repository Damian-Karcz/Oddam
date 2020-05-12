import React from "react";
import decoration from "../assets/Decoration.svg";

export default function HomeContact() {
    return (
        <>
            <section className="contactMain">
                <div className="backgroundImageDiv">

                </div>
                <div className="formDiv">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration} alt="Decoration Border"/>
                    <form>
                        <label> Wpisz swoje imię
                            <input placeholder="Krzysztof"/>
                        </label>
                        <label> Wpisz swój email
                            <input type="email" placeholder="abc@xyz.pl"/>
                        </label>
                        <label> Wpisz swoją wiadomość
                            <textarea placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
                        </label>
                        <input className="buttonsHeader" type="submit" value="Wyślij"></input>

                    </form>
                </div>
            </section>
        </>
    )
}