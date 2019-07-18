import React, { Component } from 'react';
import { StarshipList } from '../sw-components/item-lists';
import Row from '../row/row';
import StartshipDetails from '../sw-components/startship-details';

export default class StarshipPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return (
            <Row 
                left={ <StarshipList onItemSelected = {this.onItemSelected} /> }
                right={ <StartshipDetails itemId={ this.state.selectedItem } /> }/>
        );
    }
}