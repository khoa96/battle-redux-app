import React, { Component } from 'react'
import PlayerReview from '../battle/PlayerReview';

export default class Profile extends Component {
    render() {
        const { avatar_url, name, followers, following } = this.props.info;
        const { repo } = this.props;
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src={avatar_url}
                    alt={name}
                />
                <h2 className="username">@{name}</h2>
                <ul className="profile-items">
                    <li>Followers: {followers}</li>
                    <li>Following: {following}</li>
                    <li>Public Repos: {repo} </li>
                </ul>
            </div>

        )
    }
}
