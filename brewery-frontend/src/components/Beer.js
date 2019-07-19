import React from 'react';

const Beer = (props) => {
    return (
        <div>

            <ul>
                <li>
                    Name: {props.beer.name}, Type: {props.beer.brewery_type}<br/>
                    Address: {props.beer.street} {props.beer.city}, {props.beer.state}
                    <br/>{props.beer.postal_code}
                </li>
            </ul>
        </div>
    )
}

export default Beer;
