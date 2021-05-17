import React from "react";
import ListClients from "../components/ListClients";
import ListMovies from "../components/ListMovies";

export default function Detail() {
  return (
    <div>
        <ListMovies />
        <ListClients />
    </div>
  );
}