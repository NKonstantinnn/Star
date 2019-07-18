import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import withSwapiService from '../../hoc-helper/with-swapi-service';

const StarShipDetails = (props) => {
    return (
        <ItemDetails { ...props }> 
                
            <Record field="model" label="Model" />
            <Record field="length" label="Lenght" />
            <Record field="costInCredits" label="Cost" />
                
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
}; 

export default withSwapiService(StarShipDetails, mapMethodsToProps);