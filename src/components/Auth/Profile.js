import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Profile() {
    const {currentUser} = useAuth();

    return (
        <span className="profile p-2">
            {/* Below we access the currentUser to display specific info about them. THis could be a component that would allow the user to access their profile in an application, creating more robust functionality than we implement here. */}
            {currentUser.email}
            <img src={currentUser.photoURL} alt={`${currentUser.email} profile`} />
        </span>
    )
}