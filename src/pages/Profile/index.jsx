import React, { Component } from 'react'

import './style.scss';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';

export default class Profile extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar></NavBar>

                <div className="card full_profile">
                    eh fogo, nem acabei ainda

                    <div className="details">
                        <UserProfile></UserProfile>
                    </div>

                    <div className="languages">
                        <h2>Linguagens</h2>
                        <progress min='0' max='100' value='50'></progress>
                    </div>
                    <div className="prizes">
                        <h2>Prêmios</h2>
                    </div>
                </div>

            </div>
        )
    }
}
