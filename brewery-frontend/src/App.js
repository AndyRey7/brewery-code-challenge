import React, { Component } from 'react';
import BreweryList from './components/BreweryList';
import BreweryDisplay from './components/BreweryDisplay';

import './App.css';

class App extends Component {

    state = {
        breweries: [],
        brewery: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/brewery')
        .then(res => res.json())
        .then(data => {
            this.setState({
                breweries: data
            })
        })
    }

    handleShow = (brewery) => {
        this.setState({brewery
        }, ()=>console.log(this.state.brewery))
    }

  render() {
      return (
        <div className="home">
            <BreweryList breweries={this.state.breweries} handleShow={this.handleShow}/>
            <BreweryDisplay brewery={this.state.brewery}/>
        </div>
      );
  }
}

export default App;

//
