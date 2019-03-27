import React, { Component } from 'react'
import Profile from './Profile';

export default class PlayerResult extends Component {
    render() {
        const { status } = this.props;
        const { score, info, repo } = this.props.user;
        return (
            <div className="column player-result">
                <h2 className="header">{ status }</h2>
                <p className="column-score">{ score }</p>
                <Profile info={info} repo={repo}/>
            </div>
        )
    }
}
