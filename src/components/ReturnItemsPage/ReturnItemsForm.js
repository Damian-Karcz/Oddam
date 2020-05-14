import React, { Fragment } from 'react'
import Form, { Page } from 'react-form-carousel'


export default function ReturnItemsHome()  {


            return (
                <>
                    <main className="returnItemSection">
                                <Form>
                                    <Page>
                                            <div className="importantDiv">
                                                <h1>Ważne!</h1>
                                                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                                                    je przekazać.</p>
                                            </div>
                                        <div className="stepsFormFirst stepAll">
                                            <p>Krok 1/4</p>
                                            <h1>Zaznacz co chcesz oddać: </h1>
                                            <input type="radio" name="return" />
                                            <label>ubrania, które nadają się do ponownego użycia</label><br/>
                                            <input type="radio" name="return"/>
                                            <label>ubrania, do wyrzucenia</label><br/>
                                            <input type="radio" name="return"/>
                                            <label>zabawki</label><br/>
                                            <input type="radio" name="return"/>
                                            <label>książki</label><br/>
                                            <input type="radio" name="return"/>
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
                                            <select>
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
                                            <label>Lokalizacja: </label><br/>
                                            <select>
                                                <option>Poznań</option>
                                                <option>Warszawa</option>
                                                <option>Kraków</option>
                                                <option>Wrocław</option>
                                                <option>Katowice</option>
                                            </select>
                                            <label>Komu chcesz pomóc?</label><br/>
                                            <label>dzieciom
                                            <input type="checkbox"/>
                                            </label>
                                            <input type="checkbox"/>
                                            <input type="checkbox"/>
                                            <input type="checkbox"/>
                                            <input type="checkbox"/>
                                            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                                            <input type="text"/>
                                        </div>
                                    </Page>
                                </Form>
                    </main>
                </>
            )
}


