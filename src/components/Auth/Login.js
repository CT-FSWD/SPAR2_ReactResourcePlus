import React from 'react'
//This imports the AuthProvider information into the login component, so we can access authenticate, currentUser from the context
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card} from 'react-bootstrap'
//Below is added to push the user back to the Home page of our application
import { useHistory } from 'react-router'

export default function Login() {
    //The below syntax is what we need to use to import the authenticate function into this app from the Context Provider
    const {authenticate} = useAuth();
    const history = useHistory();

    //handleAuth will locally handle the function call and any redirects we need to happen as well as other functionality. We could add saving the user to our db here if that is what we need to happen.
    async function handleAuth() {
        await authenticate();
        history.push('/bootstrap');
    }

    return (
        <div className="login">
            <article className="bg-info mb-5 p-5 text-dark">
                <h1 className="">Welcome to ResourcePlus!</h1>
            </article>
            <Container>
                <Card className="m-2 border-dark text-center">
                    <Card.Header className="bg-dark text-white">
                        <h2>Login for full functionality</h2>
                    </Card.Header>
                    <Card.Body>
                        <button onClick={() => handleAuth()} className="btn btn-dark">Login w/ GitHub</button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}