import React from 'react';
import Beer from './Beer';

export default class BeerList extends React.Component {


    beerData = () => {
        return this.props.beers.map(beer => <Beer key={beer.id} beer={beer}/>)
    }


    render() {
        
        return (
            <div>
                <h1>Here is a list of beers</h1>
                {this.beerData()}
            </div>
        )
    }
}
