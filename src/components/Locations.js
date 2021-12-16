import React from "react";
import "../App.css";
import "./Locations.css"

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      toggle: true,
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

  show = () => {
    if (this.state.toggle === true) {
      this.setState({toggle: false})
    } else {
      this.setState({toggle: true})
    }
  }

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
        <button onClick={this.show}>Show Locations</button>
        <div className="locationList">{this.state.toggle ? display : " "}</div>
      </div>
    );
  }
}

export default Locations;







  

  

 