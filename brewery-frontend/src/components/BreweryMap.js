import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class BreweryMap extends Component {

    state = {
      map: {},
      mapsApi: {}
  }

  // Runs once when the Google Maps library is ready
  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      map,
      mapsApi
    });
  });


  render() {
    return (

        <section className="b-map">

          <GoogleMapReact
            bootstrapURLKeys={{

              key: 'AIzaSyACICTQnHpC3uoP3Ah1GdW5MW9LntQt-Ps',
              libraries: ['places', 'directions']
            }}
            defaultZoom={11}
            defaultCenter={{ lat: -73.456, lng: 40.3454 }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi.
          >
          </GoogleMapReact>
        </section>
    )
  }
}

export default BreweryMap;
