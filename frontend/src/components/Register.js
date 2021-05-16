import React, { useState } from 'react';
import HttpInstance from "../utils/http";
import "./css/login.css";

const http = new HttpInstance();

async function register(username, password) {
  const res = await http.post('/auth/register', {
    username,
    password,
  });
  console.log(res)
}

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <button onClick={() => register(username, password)}>Registrar</button>
    </div>
  );
}

export default Register;