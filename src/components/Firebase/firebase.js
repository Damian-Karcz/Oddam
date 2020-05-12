// import app from 'firebase/app';
// import 'firebase/auth';
//
// const config = {
//     apiKey: "AIzaSyD0sSPPf99cStRzZUl6wPdCjdZ50u68rT8",
//     authDomain: "oddaj-rzeczy-a0455.firebaseapp.com",
//     databaseURL: "https://oddaj-rzeczy-a0455.firebaseio.com",
//     projectId: "oddaj-rzeczy-a0455",
//     storageBucket: "oddaj-rzeczy-a0455.appspot.com",
//     messagingSenderId: "675859184816",
// };
//
// class Firebase {
//     constructor() {
//         app.initializeApp(config);
//
//         this.auth = app.auth();
//     }
//
//     // *** Auth API ***
//
//     doCreateUserWithEmailAndPassword = (email, password) =>
//         this.auth.createUserWithEmailAndPassword(email, password);
//
//     doSignInWithEmailAndPassword = (email, password) =>
//         this.auth.signInWithEmailAndPassword(email, password);
//
//     doSignOut = () => this.auth.signOut();
//
//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//
//     doPasswordUpdate = password =>
//         this.auth.currentUser.updatePassword(password);
// }
//
// export default Firebase;

