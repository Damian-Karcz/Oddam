import React, {useState} from "react";
import decoration from "../assets/Decoration.svg";
import facebookImg from "../assets/Facebook.svg"
import instagramImg from "../assets/Instagram.svg"

export default function HomeContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = {
            Name: name,
            Email: email,
            Message: message
        }
        const Api = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        fetch(`${Api}`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <>
            <section className="contactMain">
                <div className="backgroundImageDiv">

                </div>
                <div className="formDiv">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration} alt="Decoration Border"/>
                    <form onSubmit={handleSubmit}>
                        <label> Wpisz swoje imię
                            <input type="text" placeholder="Krzysztof" onChange={handleChangeName} value={name}/>
                        </label>
                        <label> Wpisz swój email
                            <input type="email" placeholder="abc@xyz.pl" onChange={handleChangeEmail} value={email}/>
                        </label>
                        <label> Wpisz swoją wiadomość
                            <textarea onChange={handleChangeMessage} value={message} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
                        </label>
                        <input className="buttonsHeader" type="submit" value="Wyślij"></input>
                    </form>
                </div>
            </section>
            <footer className="pageFooter">
                <p>Copyright by Coders Lab</p>
                <div>
                    <img src={facebookImg}/>
                    <img src={instagramImg}/>
                </div>
            </footer>

        </>
    )
}