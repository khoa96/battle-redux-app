import React, { Component } from 'react'
import Player from './Player';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const players = [
    {
        id: 1,
        label: 'Người Chơi 1'
    },
    {
        id: 2,
        label: 'Người Chơi 2'
    }
]

class PlayerList extends Component {

    render() {
        const { isUser1Readly, isUser2Readly, username1, username2 } = this.props.player;
        return (
            <div className="battle">
                <div className="row">
                    {
                        players.map((player) => {
                            return (
                                <Player
                                    key={player.id}
                                    id={player.id}
                                    label={player.label}
                                />
                            )
                        })
                    }
                </div>
                {
                    (isUser1Readly && isUser2Readly) ?
                        <Link
                            to={{
                                pathname: "/result",
                                search: "username1=" + username1 + "&username2=" + username2
                            }}
                            className="btn btn--form battle-btn">
                            &#9812; Thách Đấu &#9812;
                        </Link>
                        : ""
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.playerReducer
    }
}

export default connect(mapStateToProps)(PlayerList)