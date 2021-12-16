import React from "react";
import "../App.css";

class Movies extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      currentMovie: null,
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  handleChange = (event) => {
    let moviesObj = this.state.movies.find((movie) => {
      return movie.title === event.target.value;
    });

    this.setState({
      currentMovie: moviesObj,
    });
  };

  render() {
    let dropDown = this.state.movies.map((movie) => {
      return <option>{movie.title}</option>;
    });

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange}>
          <option></option>
          {dropDown}
        </select>

        <h3>
          {this.state.currentMovie ? this.state.currentMovie.title : null}{" "}
          {this.state.currentMovie?.title}
          <br/>
          {this.state.currentMovie?.release_date}
          <br/>
          {this.state.currentMovie?.description}
        </h3>
      </div>
    );
  }
}

export default Movies;
