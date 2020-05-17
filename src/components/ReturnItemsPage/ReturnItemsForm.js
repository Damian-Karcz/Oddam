import React, { useState} from 'react';
import Form, { Page } from 'react-form-carousel';
import loadImg from '../../assets/Icon-4.svg';
import shirtIcon from '../../assets/Icon-1.svg'
import firebase from "firebase";


export default function ReturnItemsHome(props)  {
    const [whoWantHelp, setWhoWantHelp] = useState([])
    const [color, setColor] = useState("")
    // const [readData, setReadData] = useState([])

    const userEmail = props.user;

    //--step3 //
    const colorLabelStyle = {
        backgroundColor: color
    }
    const handleWhoWantHelp = (e) => {
        if (whoWantHelp.includes(e.target.value)) {
            setWhoWantHelp( whoWantHelp.filter(el => el !== e.target.value))
            return
        }
        setWhoWantHelp( [...whoWantHelp, e.target.value])
        setColor("orange")
    }
    const [localization, setLocalization] = useState("")
    const localizationChange = (e) => {
        setLocalization(e.target.value)
    }

    const [organizationName, setOrganizationName] = useState("");
    const organizationNameChange = (e) => {
        setOrganizationName(e.target.value)
    }


    //--Item Type--//
    const [itemType, setItemType] = useState("")
    const handleItemType = (e) => {
        setItemType(e.target.value)
    }
    //--Item Type End--//

    //Bags Number//
    const [bagsNumber, setBagsNumber] = useState("")
    const handleBagsNumberChange = (e) => {
        setBagsNumber(e.target.value);
    }
    //Bags Number End//

    //Address details//
    const [addressDetails, setAddressDetails] = useState({street:"", town:"", postalCode:"", phone:""})
    const handleAddressDetails = ({target}) => {
        setAddressDetails(prev=>({...prev, [target.name]: target.value}))
    }
    //Address details end//

    //Date of pickup//
    const [dateDetails, setDateDetails] = useState({date:"", hour:"", comments:""});
    const handleDateDetails = ({target}) => {
        setDateDetails(prev=>({...prev, [target.name]: target.value}))
    }
    const db = firebase.firestore();

    // useEffect( ( ) => {
    //     db.collection("users").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`);
    //             setReadData( prev => ([...prev, doc.data()]))
    //         });
    //     });
    // },[])


    const onSubmit = (props) => {
        db.collection(`${props}`).add({
            itemType: itemType,
            quantity: bagsNumber,
            localization: localization,
            forWho: whoWantHelp,
            organizationName: organizationName,
            address: addressDetails,
            date: dateDetails

        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <>
            <main className="returnItemSection">
                <Form onSubmit={ () => onSubmit(userEmail)}>
                    <Page>
                        <div className="importantDiv">
                            <h1>Ważne!</h1>
                            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                                je przekazać.</p>
                        </div>
                        <div className="stepsFormFirst stepAll">
                            <p>Krok 1/4</p>
                            <h1>Zaznacz co chcesz oddać: </h1>
                            <input type="radio" name="return" value="ubrania, które nadają się do ponownego użycia" onClick={handleItemType}/>
                            <label>ubrania, które nadają się do ponownego użycia</label><br/>
                            <input type="radio" name="return" value="ubrania, do wyrzucenia" onClick={handleItemType}/>
                            <label>ubrania, do wyrzucenia</label><br/>
                            <input type="radio" name="return" value="zabawki" onClick={handleItemType}/>
                            <label>zabawki</label><br/>
                            <input type="radio" name="return" value="książki" onClick={handleItemType}/>
                            <label>książki</label><br/>
                            <input type="radio" name="return" value="inne" onClick={handleItemType}/>
                            <label>inne</label><br/>
                        </div>
                    </Page>

                    <Page>
                        <div className="importantDiv">
                            <h1>Ważne!</h1>
                            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                        <div className="stepsFormSecond stepAll">
                            <p>Krok 2/4</p>
                            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h1>
                            <label>Liczba 60l worków:</label>
                            <select value={bagsNumber} onChange={handleBagsNumberChange} name="bagsNumber">
                                <option>--wybierz--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </Page>
                    <Page>
                        <div className="importantDiv">
                            <h1>Ważne!</h1>
                            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                                je przekazać.</p>
                        </div>
                        <div className="stepsFormThird stepAll">
                            <p>Krok 3/4</p>
                            <label><h1>Lokalizacja: </h1></label><br/>
                            <select onChange={localizationChange} value={localization} name="localization">
                                <option>--wybierz--</option>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select><br/>
                            <h2>Komu chcesz pomóc?</h2><br/>
                            <div className="checkDiv">
                                <label style={whoWantHelp.includes("dzieciom") ? colorLabelStyle: {}} >dzieciom
                                    <input type="checkbox" value="dzieciom" onClick={handleWhoWantHelp}/>
                                </label>
                                <label style={whoWantHelp.includes("samotnym matkom") ? colorLabelStyle: {}} >samotnym matkom
                                    <input type="checkbox" value="samotnym matkom" onClick={handleWhoWantHelp}/>
                                </label>
                                <label style={whoWantHelp.includes("bezdomnym") ? colorLabelStyle: {}} >bezdomnym
                                    <input type="checkbox" value="bezdomnym" onClick={handleWhoWantHelp}/>
                                </label>
                                <label style={whoWantHelp.includes("niepełnosprawnym") ? colorLabelStyle: {}} >niepełnosprawnym
                                    <input type="checkbox" value="niepełnosprawnym" onClick={handleWhoWantHelp}/>
                                </label>
                                <label style={whoWantHelp.includes("osobom starszym") ? colorLabelStyle: {}} >osobom starszym
                                    <input type="checkbox" value="osobom starszym" onClick={handleWhoWantHelp}/>
                                </label>
                            </div>
                            <label><h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2></label>
                            <input type="text" value={organizationName} onChange={organizationNameChange} name="oraganizationName"/>
                        </div>
                    </Page>
                    <Page>
                        <div className="importantDiv">
                            <h1>Ważne!</h1>
                            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                                je przekazać.</p>
                        </div>
                        <div className="stepsFormFourth stepAll">
                            <p>Krok 4/4</p>
                            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera </h1>
                            <div className="addressDateForm">
                                <div className="addressDiv">
                                    <h2>Adres odbioru</h2>
                                    <label>Ulica
                                        <input type="text" value={addressDetails.street} name="street" onChange={handleAddressDetails}/>
                                    </label>
                                    <label>Miasto
                                        <input type="text" value={addressDetails.town} name="town" onChange={handleAddressDetails}/>
                                    </label>
                                    <label>Kod pocztowy
                                        <input type="text" value={addressDetails.postalCode} name="postalCode" onChange={handleAddressDetails}/>
                                    </label>
                                    <label>Numer telefonu
                                        <input type="text" value={addressDetails.phone} name="phone" onChange={handleAddressDetails}/>
                                    </label>
                                </div>
                                <div className="dateDiv">
                                    <h2>Termin odbioru</h2>
                                    <label>Data
                                        <input type="text" value={dateDetails.date} name="date" onChange={handleDateDetails}/>
                                    </label>
                                    <label>Godzina
                                        <input type="text" value={dateDetails.hour} name="hour" onChange={handleDateDetails}/>
                                    </label>
                                    <label>Uwagi dla kuriera
                                        <textarea className="textareaStyle" value={dateDetails.comments} name="comments" onChange={handleDateDetails}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Page>
                    <Page>
                        <div className="stepsSummary stepAll">
                            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera </h1>
                            <h2>Oddajesz:</h2>
                            <p><img src={shirtIcon} alt="T-Shirt Icon"/>{bagsNumber} worki, {itemType}, {whoWantHelp.join(", ")}
                                {/*{*/}
                                {/*    whoWantHelp.map(help => (*/}
                                {/*        <p>{help}</p>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </p>
                            <p><img src={loadImg} alt="Loading Icon"/>Dla lokalizacji: {localization} </p>
                            <div className="addressDateSummary">
                                <div className="addressDiv">
                                    <h2>Adres odbioru</h2>
                                    <p>Ulica: <span>{addressDetails.street}</span></p>
                                    <p>Miasto: <span>{addressDetails.town}</span></p>
                                    <p>Kod pocztowy: <span>{addressDetails.postalCode}</span></p>
                                    <p>Numer telefonu: <span>{addressDetails.phone}</span></p>
                                </div>
                                <div className="dateDiv">
                                    <h2>Termin odbioru:</h2>
                                    <p>Data: <span>{dateDetails.date}</span></p>
                                    <p>Godzina: <span>{dateDetails.hour}</span></p>
                                    <p>Uwagi dla kuriera: <span>{dateDetails.comments}</span></p>
                                </div>
                            </div>
                        </div>
                    </Page>
                </Form>
            </main>
        </>
    )
}


