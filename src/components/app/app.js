import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet'
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import { SwapiServiceProvider } from '../../swapi-service-context/swapi-service-context';

import './app.css';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';
import StartshipDetails from '../sw-components/startship-details';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';

export default class App extends Component {

  swapiService = new SwapiService();

  onServiceChange = () => {
    console.log("change serivce");
  }

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLogedIn: true
    });
  }

  render() {

    const { isLogedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.swapiService }>
          <Router>
            <div className="container">
              <Header onServiceChange = { this.onServiceChange } />

              <RandomPlanet />
              <Switch>
                <Route path="/" 
                  render={() => <h2>Welcome to Star</h2>}
                  exact />
                <Route path="/people/:id?" component={ PeoplePage } />
                <Route path="/planets" component={ PlanetPage } />
                <Route path="/starships"
                  component={ StarshipPage }
                  exact />
                <Route path="/starships/:id"
                  render={ ({ match }) => {
                    const { id } = match.params;
                    return <StartshipDetails itemId={ id }  /> 
                  }} />
                <Route 
                  path="/login"
                  render={() => (
                    <LoginPage onLogin={ this.onLogin } isLoggedIn={ isLogedIn }/>
                  )} />
                <Route 
                  path="/secret"
                  render={() => (
                    <SecretPage isLogedIn={ isLogedIn }/>
                  )} />

                <Route render={ () => <h2>Page not found</h2> } />
              </Switch>
              
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}