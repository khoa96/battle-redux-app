import React, { Component } from 'react';

export default class PopularItem extends Component {
  render() {
    const { index, popular } = this.props;
    return (
      <li className="popular-list--item">
        <h3 className="popular-list--rank">{index}</h3>
        <img className="popular-list--image" src={popular.owner.avatar_url} alt="" />
        <h2 className="name-repo">
          <a href={popular.html_url}>{popular.name}</a>
        </h2>
        <ul className="card-list">

          <li className="card-list-item">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>{popular.stargazers_count} stars</span>
          </li>
          <li className="card-list-item">
            <span>
              <i className="fas fa-code-branch"></i>
            </span>
            <span>{popular.forks_count} forks</span>
          </li>
          <li className="card-list-item">
            <span>
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <span>{popular.open_issues_count} open issues</span>
          </li>

        </ul>
      </li>
    )
  }
}
