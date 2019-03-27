import React, { Component } from 'react'

export default class PlayerReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.onResetUser = this.onResetUser.bind(this)
    }

    onResetUser() {
        this.props.onResetUser();
    }
    
    render() {
        const { info } = this.props;
        const { avatar_url, name } = info;
        
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src={avatar_url}
                    alt={name}
                />
                <h2 className="username">@{name}</h2>
                <button className="btn btn--form btn-reset" onClick={this.onResetUser} >Reset</button>
            </div>
        )
    }
}
