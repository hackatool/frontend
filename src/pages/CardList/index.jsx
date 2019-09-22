import React from 'react'
import { Link } from "react-router-dom"

import Icon from './icon';

import "./style.scss";

// actually this is how we import the icons
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';
import UserProfile from '../../components/UserProfile';



export default function CardList() {
    return (
        <>
            <nav>
                <img src={menu} alt="menu" />
                <img src={logo} alt="logo" />
                <img src={search} alt="search" />
            </nav>

            {/* POG (WOP) >>> GO HORSE */}
            <div className="container-wrapper">
                <div className="container">

                    <Link to="/user">
                        <div className="card profile">
                            <UserProfile></UserProfile>
                        </div>
                    </Link>

                    <div className="card counter">

                        <Icon number={319}></Icon>

                        <span className="description">
                            Hackathons participados
                        </span>

                    </div>

                    <div className="card list hacks">
                        <h2>Últimos Hackathons</h2>
                        <div className="empty">
                            <span>
                                Adicione já
                            </span>
                        </div>

                        <Link to="/hackathons">
                            mais>>>
                        </Link>
                    </div>

                    <div className="card list projects">
                        <h2>Últimos Projetos</h2>
                        <div className="empty">
                            <span>
                                Adicione seus projetos
                            </span>
                        </div>
                        <a href="#mais">mais>>></a>
                    </div>
                </div>
            </div>
        </>
    )
}
