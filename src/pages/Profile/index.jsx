import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './style.scss';
import UserProfile from '../../components/UserProfile';

export default class Profile extends Component {
    render() {
        return (
            <div className='page'>
                <nav>
                    <Link to="/">
                        <img src="Arrow.svg" alt="back" />
                    </Link>

                    <h1>Profile</h1>
                    <img src="add.png" alt="add" />
                </nav>



                <div className="card full_profile">
                    eh fogo, nem acabei ainda

                    <div className="details">
                        <UserProfile></UserProfile>
                    </div>
                    
                    <div className="languages">
                        languages
                        <progress min='0' max='100' value='50'></progress>
                    </div>
                    <div className="prizes">
                        prizes
                    </div>
                </div>

            </div>
        )
    }
}
