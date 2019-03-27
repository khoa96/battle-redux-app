import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import Nav from './components/UI/Nav';
import Home from './components/UI/Home';
import PageNotFound from './components/UI/PageNotFound';
import Popular from './components/popular/Popular';
import Battle from './components/battle/Battle';
import Result from './components/result/Result'; 

class App extends Component {
  render() {
    return (
      <Routers>
        <div className="container">
          <Nav/>
          <Switch>
            <Route path="/" exact={true} component={Home} />
             <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route path="/result" component={Result} /> 
            <Route component={PageNotFound} />
        </Switch>
        </div>
      </Routers>
    );
  }
}


export default App;
