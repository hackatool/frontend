import React, { Component } from 'react'

export default class Skillbar extends Component {

    styles = {
        progressbarActive: {
            position: 'absolute',
            width: `${this.props.progress * this.props.width}px`,
            height: '10px',
            borderRadius: '10px',

            background: this.props.color,
        },

        progressbarBackground: {
            position: 'absolute',
            width: `${this.props.width}px`,
            height: '10px',
            borderRadius: '10px',

            background: 'rgba(0, 0, 0, 0.6)'
        }
    }

    render() {
        console.log(this.styles);

        return (
            <div className="skillbar" >
                <span>
                    {this.props.skill}
                </span>
                <div style={this.styles.progressbarBackground}></div>
                <div style={this.styles.progressbarActive}></div>
            </div>
        )
    }
}
