import React, { useEffect, useState } from 'react';
import { clientInfoData } from '../store/client/reducer';
import { connect } from 'react-redux';
import HttpInstance from "../utils/http";
import "./css/login.css";

const http = new HttpInstance();

async function updateMoviesList(clientId, setRentedMovies,setMovies) {
  await getRentedMovies(clientId, setRentedMovies);
  await getMovies(setMovies);
}

async function getMovies(setMovies) {
  const res = await http.get('/movies?rented=false');
  setMovies(res || []);
}

async function rentMovie(movieId, clientId) {
  await http.post('/movies/rent', { id: movieId, clientId });
}

async function getRentedMovies(clientId, setRentedMovies) {
  const res = await http.get(`/movies/rent/${clientId}`);
  setRentedMovies(res || []);
}

async function returnMovie(movieId, clientId) {
  const res = await http.post('/movies/return/', { id: movieId, clientId });
}


const ListMovies = ({ clientInfo }) => {
  const [movies, setMovies] = useState([]);
  const [rentedMovies, setRentedMovies] = useState([]);
  useEffect(async () => {
    await getMovies(setMovies);
    if (clientInfo && clientInfo.id) {
      await getRentedMovies(clientInfo.id, setRentedMovies);
    }
  }, [clientInfo]);

  return (
    <div>
      {clientInfo && clientInfo.scope === 'user' ?
        (
        <div>
          <ul>
            {movies.length ? (
              <div>
                <h1>Alquiler Peliculas</h1>
                {movies.map(movie => (
                  <li key={movie.id}>
                    Name: {movie.name}
                    <button onClick={async () => {
                      await rentMovie(movie.id, clientInfo.id, setRentedMovies);
                      await updateMoviesList(clientInfo.id, setRentedMovies, setMovies);
                    }}>
                      Alquilar
                    </button>
                  </li>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
        ): (
          <div></div>
        )
      }
      <div>
        {rentedMovies && rentedMovies.length ? (
          <div>
            <h1>Alquiladas</h1>
            {rentedMovies.map(movie => (
              <li key={movie.id}>
                Name: {movie.name} - Usuario: {movie.userId}
                {clientInfo.scope !== 'admin' ? (
                  <button onClick={async () => {
                    await returnMovie(movie.id, clientInfo.id, setRentedMovies);
                    await updateMoviesList(clientInfo.id, setRentedMovies,setMovies);
                  }}>
                    Cancelar
                  </button>
                ) : (
                  <div></div>
                )}
              </li>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      clientInfo: clientInfoData(state)
  }
}

export default connect(mapStateToProps)(ListMovies)
