import React, { Component } from 'react';
import HttpInstance from "../utils/http";
import "./css/login.css";

const http = new HttpInstance();

class ListMovies extends Component {
  state = {
    movies: []
  };

  async getInfo() {
    const res = await http.get('/?table=movies');
    console.log(res)
    this.setState({
      movies: res
    });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.getInfo()}>Get movies</button>
          <p>Init database:</p>
          <ul>
            {this.state.movies.map(movie => (
              <li key={movie.id}>Name: {movie.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default ListMovies;