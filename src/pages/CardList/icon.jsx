import React from 'react'

import './icon.scss';

import computer_icon from '../../assets/computer_icon.png';

export default function Icon(props) {
    return (
        <div className="computer-icon">
            <img src={computer_icon} alt="computer icon" />
            <span className="count">{props.number}</span>
        </div>
    )
}
