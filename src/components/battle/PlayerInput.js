import React, { Component } from 'react'

export default class PlayerInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ""
        }
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this)
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    onUsernameSubmit() {
        if (this.state.username) {
            this.props.onUsernameSubmit(this.state.username)
        }
    }

    render() {
        const { username } = this.state;
        
        return (
            <div className="column">
                <label className="header">
                    {this.props.label}
                    <input type="text"
                        id="1"
                        value={username}
                        placeholder="github username"
                        onChange={(event) => { this.onUsernameChange(event) }}
                    />
                </label>
                <button
                    className={`btn ${username? "btn--form" : "btn--disable"}`}
                    type="button"
                    onClick={this.onUsernameSubmit}
                >
                    Submit
               </button>
            </div>
        )
    }
}

