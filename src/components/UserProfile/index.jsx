import React from 'react'

import homealone from '../../assets/homealone.png';

import './style.css';

export default function UserProfile() {
    return (
        <>
            <div className="profilepic-wrapper">
                <img src={homealone} alt="profile pic" />
            </div>

            <h2 className="username">user</h2>
            <span className="user-description">Developer <br /> UI/UX </span>
        </>
    )
}
