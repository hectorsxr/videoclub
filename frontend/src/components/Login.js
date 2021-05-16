import React, { useState } from 'react';
import { connect } from 'react-redux';
import HttpInstance from "../utils/http";
import "./css/login.css";
import updateClientInfo from '../store/client/action'
import ClientInfo from './ClientInfo';

const http = new HttpInstance();

async function login(username, password, setExists, updateClientInfo) {
  const [res] = await http.post('/auth/login', {
    username,
    password,
  });
  if (res) {
    setExists(true);
    updateClientInfo(res)
  } else {
    setExists(false);
  }
}

function Login({ updateClientInfo }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [exists, setExists] = useState(false);


  return (
    <div className="login">
      <h1>Login</h1>
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
      <button onClick={() => login(username, password, setExists, updateClientInfo)}>Entrar</button>
      {exists ?
        (
          <div>
            <ClientInfo />
          </div>
        ) : (
          <div />
        )
      }
    </div>
  );
}

export default connect(null, { updateClientInfo })(Login);