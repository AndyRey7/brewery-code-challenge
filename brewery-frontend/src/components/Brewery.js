import React from 'react';

const Brewery = (props) => {
    return (
            <ul className="more-info" onClick={() => props.handleShow(props.brewery)}>
                <li className="b-name">
                    {props.brewery.name}
                </li>
                <li className="brewery-type">
                    Brewery Type: {props.brewery.brewery_type}
                </li>
                <li className="b-address">
                {props.brewery.street} {props.brewery.city}, {props.brewery.state}
                <br/>{props.brewery.postal_code}
                </li>
                <div className="btn">
                    <a href={props.brewery.website_url} target="_blank" rel="noopener noreferrer">Brewery Website</a>
                </div>
                
            </ul>
    )
}

export default Brewery;
