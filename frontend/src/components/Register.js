import React, { useState } from 'react';
import HttpInstance from "../utils/http";
import "./css/login.css";

const http = new HttpInstance();

async function register(username, password, setSuccesful, setUserRegistered) {
  try {
    await http.post('/auth/register', {
      username,
      password,
    });
    setUserRegistered(username);
    setSuccesful(true);
  } catch(err) {
    setSuccesful(false);
  }
}

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [succesful, setSuccesful] = useState(false);
  const [userRegistered, setUserRegistered] = useState('');

  return (
    <div className="login">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Usuario"
        onChange={(value) => {
          setUsername(value.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(value) => {
          setPassword(value.target.value);
        }}
      />
      <button onClick={() => register(username, password, setSuccesful, setUserRegistered)}>Registrar</button>
      {succesful ? (
        <div>
          Usuario {userRegistered} registrado con éxito
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}

export default Register;