import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import withData  from '../../hoc-helper/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
    
    return (
        <ItemDetails 
            itemId={ itemId }
            getData={ getPerson }
            getImageUrl={ getPersonImage }>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {

    return (
        <ItemDetails 
            itemId={ itemId }
            getData={ getPlanet }
            getImageUrl={ getPlanetImage }>

            <Record field="population" label="P opulation" />
            <Record field="rotaitonPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    );
};

const StarShipDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={ itemId }
            getData={ getStarship }
            getImageUrl={ getStarshipImage }> 

            <Record field="model" label="Model" />
            <Record field="length" label="Lenght" />
            <Record field="costInCredits" label="Cost" />

        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarShipDetails
};