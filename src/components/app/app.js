import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet'
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemDetails, { Record } from '../item-details/item-details';

import './app.css';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarShipDetails } from '../sw-components/details';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    const { getPerson, 
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={ 11 }
        getData={ getPerson }
        getImageUrl={ getPersonImage }>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={ 5 }
        getData={ getStarship }
        getImageUrl={ getStarshipImage }> 

        <Record field="model" label="Model" />
        <Record field="length" label="Lenght" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    // const peopleList = (
    //     <ItemList 
    //       getData={ this.swapiService.getAllPeople }
    //       renderItem={ ({ name, gender, birthYear }) => `${ name } (${ gender }, ${ birthYear })` } />
    // );

    // const planetList = (
    //   <ItemList 
    //     getData={ this.swapiService.getAllPlanets }
    //     renderItem={ ({ name }) => `${ name }` } />
    // );

    return (
      <ErrorBoundry>
        <div className="container">
          <Header />

          <PersonDetails itemId={ 10 } />
          <PlanetDetails itemId={ 11 } />
          <StarShipDetails itemId={ 11 } />

          <PersonList 
            renderItem={ ({ name, gender, birthYear }) => `${ name } (${ gender }, ${ birthYear })` } />

          <PlanetList 
            renderItem={ ({ name}) => name } />

        <StarshipList
            renderItem={ ({ name}) => name } />


        </div>
      </ErrorBoundry>
    );
  };
}