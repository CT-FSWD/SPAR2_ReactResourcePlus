import firebase from 'firebase/app'
import 'firebase/auth'

//The object created below is our way of connecting this application to Firebase so we can utilize the authentication. Along with authentication, Firebase also can provide storage of files, FireStore (standard database), and RealTime Database connections, along with a bunch of other features. Firebase is an example of cloud computing, which allows some of our key code to reside at Firebase, and we connect in through the Firebase functions, like initializeApp below.
//Congifure the settings for the application
const firebaseApp = firebase.initializeApp({   
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID

})

//Below initializes the authentication functionality in a Firebase application.
export const authResult = firebaseApp.auth();
export default firebaseApp;