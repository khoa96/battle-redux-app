import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/battle" activeClassName="active">Battle</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/popular" activeClassName="active">Popular</NavLink>
                </li>
            </ul>
        )
    }
}
