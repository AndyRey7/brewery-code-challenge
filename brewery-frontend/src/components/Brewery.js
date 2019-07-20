import React from 'react';

const Brewery = (props) => {
    return (
            <ul>
                <li>
                    Name: {props.brewery.name}
                </li>
                <li className="brewery-type">
                    Type: {props.brewery.brewery_type}
                </li>
                <li>
                {props.brewery.street} {props.brewery.city}, {props.brewery.state}
                <br/>{props.brewery.postal_code}
                </li>
                <div className="btn">
                    <a href={props.brewery.website_url} target="_blank" rel="noopener noreferrer">Brewery Website</a>
                </div>
                <div className="more-info" onClick={() => props.handleShow(props.brewery)}>
                    More Info
                </div>
            </ul>
    )
}

export default Brewery;
