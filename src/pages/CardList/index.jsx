import React from 'react'
import { Link } from "react-router-dom"

import Icon from './icon';

import "./style.scss";

// FULL HORSE MODE
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';

import homealone from '../../assets/homealone.png';


export default function CardList() {
    return (
        <>
            <nav>
                <img src={menu} alt="menu" />
                <img src={logo} alt="logo" />
                <img src={search} alt="search" />
            </nav>

            <div className="container-wrapper">
                {/* POG (WOP) >>> GO HORSE */}
                <div className="container">

                    <Link to="/user">
                        <div className="card profile">

                            <div className="profilepic-wrapper">
                                <img src={homealone} alt="profile pic" />
                            </div>

                            <h2 className="username">user</h2>
                            <span className="description">Developer <br /> UI/UX </span>
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
