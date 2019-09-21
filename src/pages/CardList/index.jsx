import React from 'react'

import "./style.scss";

import { Link } from "react-router-dom"


// FULL HORSE MODE
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';

import homealone from '../../assets/homealone.png';
import computer_icon from '../../assets/computer_icon.png';

export default function CardList() {
    return (
        <>
            <nav>
                <img src={menu} alt="menu" />
                <img src={logo} alt="logo" />
                <img src={search} alt="search" />
            </nav>

            <div className="container">

                <Link to="/user">
                    <div className="card profile">
                        <img src={homealone} alt="profile pic" />
                        <h2 className="username">user</h2>
                        <span className="description">Developer <br /> UI/UX </span>
                    </div>
                </Link>

                <div className="card counter">
                    <img src={computer_icon} alt="computer icon" />
                    <span className="count">319</span>

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

                    <a href="hackathonspage.html">mais>>></a>
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
        </>
    )
}
