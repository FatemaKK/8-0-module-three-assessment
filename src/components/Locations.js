import React from "react";
import "../App.css";
import "./Locations.css"

class Locations extends React.Component {
  constructor() {
    super();

    this.state = {
      locations: [],
    };
  }

  fetchLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json()) 
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocations();
  };

  render() {
    let display = this.state.locations.map((location) => {
      return (
        <div className="location-card">
          <h2>Name: {location.name} </h2>
          <h3>Climate: {location.climate} </h3>
          <h3>Terrain: {location.terrain} </h3>
        </div>
      );
    });
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <div className="locationList">{display}</div>
      </div>
    );
  }
}

export default Locations;







  

  

 