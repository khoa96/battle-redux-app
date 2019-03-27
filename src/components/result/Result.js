import React, { Component } from 'react'
//import queryString from 'query-string';
import PlayerResult from './PlayerResult';
import queryString from 'query-string';
import { getDataAllUser } from '../../api/userAPI'
import Loading from '../../components/loading/Loading';

export default class Result extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false
    }
  }

  componentDidMount = () => {

    this.setState({
      isLoading: true
    })

    const data = queryString.parse(this.props.location.search);
    const username1 = data.username1;
    const username2 = data.username2;

    getDataAllUser(username1, username2).then(data => {
      this.setState({
        users: data,
        isLoading: false
      })
    })
  }

  render() {
    const { users, isLoading } = this.state;
    return (
      <React.Fragment>
        {isLoading ? <Loading /> : ""}
        <div className="row">
          {
            users.sort((user1, user2) => {
              return user1.score - user2.score > 0 ? -1 : 1;
            }).map((user, index) => {
              return (
                <PlayerResult
                  key={index}
                  user={user}
                  status={index === 0 ? 'WIN' : 'LOSE'}
                />
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}
