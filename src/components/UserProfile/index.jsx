import React from 'react'

import homealone from '../../assets/homealone.png';

export default function UserProfile() {
    return (
        <>
            <div className="profilepic-wrapper">
                <img src={homealone} alt="profile pic" />
            </div>

            <h2 className="username">user</h2>
            <span className="description">Developer <br /> UI/UX </span>
        </>
    )
}
