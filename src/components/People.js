import React from "react";
import "../App.css";
import "./People.css"

class People extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
    };
  }

  fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json()) 
      .then((data) => {
        this.setState({
          people: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  render() {
    let display = this.state.people.map((person) => {
      return (
        <div className="person">
          <h2>Name: {person.name} </h2>
          <h3>Age: {person.age} </h3>
          <h3>Gender: {person.gender} </h3>
        </div>
      );
    });
    return (
      <div className="locations">
        <h1>Search for a Person</h1>
        <div className="peopleList">{display}</div>
      </div>
    );
  }
}

export default People;
