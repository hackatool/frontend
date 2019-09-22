import React, { Component } from 'react'

import styles from './style.module.scss';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';

export default class Profile extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar title="Profile"></NavBar>

                <div className={['card', styles.full_profile].join(' ')}>
                    eh fogo, nem acabei ainda

                    <div className="details">
                        <UserProfile></UserProfile>
                    </div>

                    <div className="languages">
                        <h2>Linguagens</h2>
                        <span>
                            WOP paradigm:
                        </span> 
                        <progress min='0' max='100' value='50'></progress>
                        <br/>

                        <div>
                            NodeJS
                            {/* make progressbar a new component */}
                            <div className={styles.progressbarActive}></div>
                            <div className={styles.progressbarBackground}></div>
                        </div>

                    </div>
                    <div className="prizes">
                        <h2>Prêmios</h2>
                    </div>
                </div>

            </div>
        )
    }
}
