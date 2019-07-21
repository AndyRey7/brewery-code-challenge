import React from 'react';
import BreweryMap from './BreweryMap';

const BreweryDisplay = (props) => {
    console.log('props in brwdisplay', props.clicked);
    return (

        <div className="brewery-display">
            <h1>{props.brewery.name}</h1>
            <p>{props.brewery.street} {props.brewery.city} {props.brewery.state}
            {props.brewery.postal_code}</p>
            <BreweryMap brewery={props.brewery} />
        </div>
    )
}

export default BreweryDisplay;
