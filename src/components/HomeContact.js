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
            name: name,
            email: email,
            message: message
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
            <main className="contactMain">
            <section className="contactSection">
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
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/"><img src={facebookImg} alt="Facebook Icon"/></a>
                    <a href="https://www.instagram.com/?hl=pl"><img src={instagramImg} alt="Instagram Icon"/></a>
                </div>
            </footer>
            </main>

        </>
    )
}