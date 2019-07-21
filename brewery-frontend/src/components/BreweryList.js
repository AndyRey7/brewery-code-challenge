import React from 'react';
import Brewery from './Brewery';

export default class BreweryList extends React.Component {

    beerData = () => {
        return this.props.breweries.map(brewery => <Brewery key={brewery.id} brewery={brewery} handleShow={this.props.handleShow}/>)
    }


    render() {

        return (
            <div className="brewery-list">
                <h1 className="brewery-title">Brewery List</h1>
                {this.beerData()}
            </div>
        )
    }
}
