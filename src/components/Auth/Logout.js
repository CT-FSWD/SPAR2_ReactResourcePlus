//Step 10 - Auth - Create Logout component
import React from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { useHistory } from 'react-router';
import './Auth.css'
//Step 14 - Auth - import Profile and render below
import Profile from './Profile';

export default function Logout() {
    const {logout, currentUser} = useAuth();
    const history = useHistory();

    function handleAuth(){
        logout();
        history.push("/");    

    }
    return (
        <div className="logout text-center p-3 bg-dark text-white">
            <Profile />
            {currentUser &&                
                <button onClick={() => handleAuth()} className="btn btn-info">Logout</button>
            }            
        </div>
    )
}
