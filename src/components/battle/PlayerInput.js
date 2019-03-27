import React, { Component } from 'react'

export default class PlayerInput extends Component {
    render() {
        return (
            <div className="column">
                <label className="header">
                    nguoi choi 1
                    <input type="text"
                        id="1"
                        value="username"
                        placeholder="github username"
                        // onChange={(event) => { this.onUsernameChange(event) }}
                    />
                </label>
                <button
                    className={`btn ${this.state.username ? "btn--form" : "btn--disable"}`}
                    type="button"
                    // onClick={() => { this.onUsernameSubmit(id) }}
                >
                    Submit
    </button>
            </div>
        )
    }
}
