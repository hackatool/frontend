import React, { Component } from 'react'

import styles from './style.module.scss';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';
import Skillbar from '../../components/Skillbar';

export default class Profile extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar title="Profile"></NavBar>

                <div className={['card', styles.full_profile].join(' ')}>
                    {/* é fraco. falta-lhe padding */}

                    <div className="details">
                        <UserProfile></UserProfile>
                    </div>

                    <div className="languages">
                        <h2>Languages</h2>

                        <Skillbar skill="NodeJS" color="green" progress={0.5} width={200}></Skillbar>
                        <Skillbar skill="ReactJS" color="lightblue" progress={0.7} width={200}></Skillbar>
                        <Skillbar skill="React Native" color="rgb(111,11,244)" progress={0.6} width={200}></Skillbar>

                    </div>
                    <div className="prizes">
                        <h2>Prizes</h2>

                        <div className={styles.empty}>
                            <span>
                                None found
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
