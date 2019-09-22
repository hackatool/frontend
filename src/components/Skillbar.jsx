import React, { Component } from 'react'
import './skillbar.scss';


export default class Skillbar extends Component {
    
    styles = {
        progressbarActive: {
            width: `${this.props.progress * 100}%`,
            background: this.props.color,
        },
    }

    render() {
        console.log(this.styles);

        return (
            <div className="skillbar" >
                <span>
                    {this.props.skill}
                </span>
                <div className="progressbarBackground" style={this.styles.progressbarBackground}></div>
                <div className="progressbarActive" style={this.styles.progressbarActive}></div>
            </div>
        )
    }
}
