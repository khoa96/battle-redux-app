import React, { Component } from 'react'
import PlayerInput from '../components/battle/PlayerInput';
import PlayerReview from '../components/battle/PlayerReview';
import { connect } from 'react-redux';
import { getProfile } from '../api/userAPI';
import { usernameSubmit } from '../actions/index';

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowPlayerInput: true,
            isShowPlayerReview: false,
            info: null
        }
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
        this.onResetUser = this.onResetUser.bind(this)
    }

    onUsernameSubmit(username) {
        // call API => get user info 
        // sau do thay doi ui : player input => player Review
        getProfile(username).then(user => {
            const userInfo = {
                avatar_url: user.avatar_url,
                name: user.login
            }
            this.setState({
                info: userInfo,
                isShowPlayerInput: false,
                isShowPlayerReview: true
            })
            // thay doi trang thai : chua san sang =>? san sang trong PlayerList
            this.props.usernameSubmit({
                id: this.props.id,
                username: user.login
            })
        })
    }

    onResetUser() {
        this.setState({
            isShowPlayerInput: true,
            isShowPlayerReview: false
        })
    }

    render() {
        const { isShowPlayerInput, isShowPlayerReview, info } = this.state;
        const { id, label } = this.props;
        
        return (
            <React.Fragment>
                {
                    isShowPlayerInput ?
                        <PlayerInput
                            id={id}
                            label={label}
                            onUsernameSubmit={this.onUsernameSubmit}
                        />
                        : ""
                }

                {
                    isShowPlayerReview ?
                        <PlayerReview
                            info={info}
                            onResetUser={this.onResetUser}
                        />
                        : ""
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.playerReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
       usernameSubmit: (payload) => dispatch(usernameSubmit(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)