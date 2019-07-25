import React from 'react';
import BreweryMap from './BreweryMap';

const BreweryDisplay = (props) => {

    return (
        <div className="brewery-display">
        <img className="image" src={props.brewery.img} alt="brewery" />
            <h1>{props.brewery.name}</h1>
            <p>{props.brewery.street} {props.brewery.city} {props.brewery.state}
            {props.brewery.postal_code}</p>

            <BreweryMap brewery={props.brewery} />
        </div>
    )
}

export default BreweryDisplay;
