import React, { Component } from 'react';
import BeerList from './components/BeerList.js';
import './App.css';

class App extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries?by_state=new_york')
        .then(res => res.json())
        .then(data => {
            this.setState({
                beers: data
            })
        })
    }

  render() {
      return (
        <div>
            <BeerList beers={this.state.beers}/>
        </div>
      );
  }
}

export default App;

//
