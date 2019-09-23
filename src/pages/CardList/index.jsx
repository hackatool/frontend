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
import SearchBox from '../../components/SearchBox';


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
    toggleSearch = () => {
        this.setState({ showSearch: !this.state.showSearch })
    }

    handleRedirect = () => {
        this.props.history.push('/user');
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
                        alt="search"
                        onClick={this.toggleSearch} />
                </nav>

                {this.state.showSearch && <SearchBox onDismiss={this.toggleSearch}/> }
                {this.state.showMenu && <Menu onDismiss={this.toggleMenu} />}

                <div className="container-wrapper">
                    <div className="container">


                        <div className="card profile" onClick={this.handleRedirect}>
                            <UserProfile></UserProfile>
                        </div>


                        <div className="card counter">

                            <Icon number={319}></Icon>

                            <span className="description">
                                participated hackathons 
                            </span>

                        </div>

                        <div className="card list hacks">
                            <h2>Last Hackathons</h2>
                            <div className="empty">
                                <span>
                                    Add now
                            </span>
                            </div>

                            <Link to="/hackathons">
                                more>>>
                            </Link>
                        </div>

                        <div className="card list projects">
                            <h2>Últimos Times</h2>
                            <div className="empty">
                                <span>
                                    Add your teams
                            </span>
                            </div>
                            <a href="#more">more>>></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
