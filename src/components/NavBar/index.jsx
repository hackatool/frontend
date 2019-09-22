import React from 'react'
import { Link } from 'react-router-dom'

import { navbar } from "./navbar.scss";

import add from "../../assets/add.png";
import arrow from "../../assets/Arrow.svg";

export default function NavBar(props) {

    return (
        <nav style={navbar}>
        <Link to="/">
            <img src={arrow} alt="back" />
        </Link>

        <h1>{props.title}</h1>
        <img src={add} alt="add" onClick={props.onAdd} />
    </nav>
    )
}
