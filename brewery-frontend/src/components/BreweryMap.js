import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class BreweryMap extends Component {

    static defaultProps = {
    center: {
      lat: -74.360033,
      lng: 41.335404
    },
    zoom: 11
  };


  render() {
      console.log('props in brewmap', this.props.brewery);
    return (
      <div className="b-map">
        <GoogleMapReact
        
          defaultCenter={{ lat: -74.36033, lng: 41.335404 }}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

// defaultCenter={{ lat: parseFloat(this.props.brewery.latitude), lng: parseFloat(this.props.brewery.longitude) }}

export default BreweryMap;
