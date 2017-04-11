import {
    AngularFireModule,
    AuthMethods
} from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyDzBG5ErnfBtDJ0tJ0w5IGNtQbsrgaCYC0",
    authDomain: "blogdesign-f58de.firebaseapp.com",
    databaseURL: "https://blogdesign-f58de.firebaseio.com",
    projectId: "blogdesign-f58de",
    storageBucket: "blogdesign-f58de.appspot.com",
    messagingSenderId: "284917816696"
};

const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
