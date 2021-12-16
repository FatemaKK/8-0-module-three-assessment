import React from "react";
import "../App.css";
import "./People.css";

class People extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      userInput: "",
      result: "",
    };
  }

  fetchPeople = () => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
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

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      result: this.state.userInput,
    });
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
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your person"
            id="search"
            value={this.state.userInput}
            onChange={this.handleUserInput}
          />
          <button type="submit" id="searchButton">
            Submit
          </button>
        </form>
        <div className="peopleList">{display}</div>
      </div>
    );
  }
}

export default People;
