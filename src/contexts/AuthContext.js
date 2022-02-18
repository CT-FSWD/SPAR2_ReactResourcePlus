//Step 6 - Auth - Create the AuthContext below

//Sometimes in React applications, we need to pass props through multiple components. This is called prop drilling and is something you want to avoid as much as possible. In this case, we want to keep track of user info and use that info in components that depends on the user. Instead of passing the user info across multiple components, here we can use a React Context Provider, which stores the information (props) in a separate storage that we can use when any component calls to that specific context.

import React, {useContext, useState, useEffect} from 'react';
//use the authResult object and firebaseApp object from base.js 
import firebaseApp, {authResult} from '../base';
//Below we import firebase functionality into our application...before we import it, we must install the firebase package into our application
import firebase from 'firebase';

//React context allows us to pass data through an application without passing props through too many components. Having to pass props through multiple child components is known as prop drilling, and is something we want to avoid when possible for better scalability and maintainability.
const AuthContext = React.createContext();

//useAuth() will use the context we have created above. This provides access to the AuthContext in other components.
export function useAuth() {
    return useContext(AuthContext);
}

//Create the AuthProvider component below...All other components will be housed in this context so the UI can use the information as necessary.
//children is a parameter being passed through to this functional component that allows child components to be referred to as 'children'. 
//This component will house all of the base functionality for authentication (login, logout, and authHandler)
export function AuthProvider({children}){
    //Create a hook that will capture the current user
    const [currentUser, setCurrentUser] = useState();
    //Create a hook that will look to see if components are still loading. This will be used to wait for the context to inform the UI before loading any components that are nested in the AuthProvider component. It will be set to true by default until the information has loaded in.
    const [loading, setLoading] = useState(true);



    //The below function will be invoked when the user clicks the login button
    async function authenticate(){
        //Below we instantiate a new Firebase GitHubAuthProvider object which will allow us to use our Firebase app settings to communicate with GitHub's Auth app.
        const authProvider = new firebase.auth.GithubAuthProvider();
        return(
            //Below is a Firebase signIn mechanism that will open the popup and attempt to connect to the user's information with GitHub.
            firebaseApp.auth().signInWithPopup(authProvider).then(authHandler)
        );
    }

     //This function will be handled as the promise is fulfilled with the signInWithPopup method from the Firebase API. It will handle the user information locally. This is where you could run specific functionality for when the user logs in (gather specific information, store specific information, etc.)
     async function authHandler(authData) {
        setCurrentUser(authData.user);
    }

    //Logout functionality
    async function logout() {
        return firebaseApp.auth().signOut().then(setCurrentUser(null));
    }

    //Below we will create a value object which will be passed through the AuthContextProvider as props. Anything we pass through this object will be able to be imported and used in any component. This allows for ease in accessing user information in any component that needs to use the information. 
    const value = {
        currentUser,
        authenticate,
        logout
    }


    //Below we create the useEffect hook that will tell the application to re-render the information anytime the authentication information has changed, keeping an updated view of user info across the entire application.
    useEffect(() => {
        const authChange = authResult.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        //This will unsubscribe the firebase application from the component as soon as it unmounts in the virtual DOM.
        return authChange;
    }, [])

    return (
        //Use the AuthContext inside of our Provider to propagate the state data throughout our application, making this accessible whereever we want/need to access it in the app.
        //Below we call to a value object created above that will house any functionality/information we want to share across the app. In value, we will include our currentUser, and functions for authenticate and logout.
        <AuthContext.Provider value={value}>
            {/* Use of loading below will wait for all the AuthContext info to load prior to showing the components in the UI. */}
            {!loading && children}
        </AuthContext.Provider>
    )
}