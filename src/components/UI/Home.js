import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                {/* This is home component */}
                <div className="home">
                    <h1 className="home-title">Chào Mừng Bạn Đến Với Trận Chiến Github</h1>
                    <h2 className="home-subtitle">Hãy Xem Ai Sẽ Là Người Chiến Thắng Trong Trận Chiến Này</h2>
                    <Link className="btn" to="/battle">
                        Thách Đấu <span className="btn-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        )
    }
}
