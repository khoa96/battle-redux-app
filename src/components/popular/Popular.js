import React, { Component } from 'react'
import LanguageList from '../../containers/LanguageList'; 
import PopularList from '../../containers/PopularList';

export default class Popular extends Component {
  render() {
    return (
      <React.Fragment>
          <LanguageList />
          <PopularList />
      </React.Fragment>
    )
  }
}
