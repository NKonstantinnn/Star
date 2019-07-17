import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    state = {
        selectedPerson: 3,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        });
    };

    render() {

        const itemList =  (
        <ItemList 
          onItemSelected={ this.onPersonSelected }
          getData={ this.swapiService.getAllPeople }
          renderItem={ ({ name, gender, birthYear }) => `${ name } (${ gender }, ${ birthYear })` }>
            
            {(i) => (
              `${ i.name } (${i.birthYear})`
            )}

        </ItemList>
        );

        const personDetails = (
          <ErrorBoundry>
            <ItemDetails itemId={ this.state.selectedPerson }/>
          </ErrorBoundry>
        );

        return (
          <Row left={ itemList } right={ personDetails } />
        );
    }
}