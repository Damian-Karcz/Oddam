import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import HomeNav from "../HomeNav";
import decoration from "../../assets/Decoration.svg";

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME_LOGIN);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <>
                <HomeNav/>
                <div className="loginPageDiv">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="Decoration Border"/>
                    <div className="logInFormDiv">
                        <form className="logInForm" onSubmit={this.onSubmit}>
                            <label>Email
                                <input
                                    name="email"
                                    value={email}
                                    onChange={this.onChange}
                                    type="text"
                                />
                            </label>
                            <label>Hasło
                                <input
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    type="password"
                                />
                            </label>

                            <button className="SingInButtonFirst"><Link to={ROUTES.SIGN_UP}>Załóż konto</Link></button>
                            <button className="SubmitButton" disabled={isInvalid} type="submit">
                                Zaloguj
                            </button>
                        </form>
                    </div>
                    {error && <p>{error.message}</p>}
                </div>
            </>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
