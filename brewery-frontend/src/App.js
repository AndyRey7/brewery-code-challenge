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
        fetch('https://api.openbrewerydb.org/breweries?by_state=new_york')
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
        <div>
            <BreweryList breweries={this.state.breweries} handleShow={this.handleShow}/>
            <BreweryDisplay brewery={this.state.brewery}/>
        </div>
      );
  }
}

export default App;

//
