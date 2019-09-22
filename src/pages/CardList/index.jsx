import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Icon from './icon';

import "./style.scss";

// actually this is how we import the icons
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';
import UserProfile from '../../components/UserProfile';
import Menu from '../../components/Menu';


export default class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showSearch: false,
        };
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    handleRedirect = () => {
        // return <Redirect push to="/user" />;

        // pog ft. go horse
        // funk do firdar-se. saudade do vue.
        window.location = '/user';
    }

    render() {
        return (
            <>
                <nav>
                    <img
                        className="clickable"
                        src={menu}
                        alt="menu"
                        onClick={this.toggleMenu} />
                    <img
                        src={logo}
                        alt="logo" />
                    <img
                        className="clickable"
                        src={search}
                        alt="search" />
                </nav>

                {this.state.showMenu && <Menu onDismiss={this.toggleMenu} />}

                {/* POG (WOP) >>> GO HORSE */}
                <div className="container-wrapper">
                    <div className="container">


                        <div className="card profile" onClick={this.handleRedirect}>
                            <UserProfile></UserProfile>
                        </div>


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
                            <h2>Últimos Times</h2>
                            <div className="empty">
                                <span>
                                    Adicione seus times
                            </span>
                            </div>
                            <a href="#mais">mais>>></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
