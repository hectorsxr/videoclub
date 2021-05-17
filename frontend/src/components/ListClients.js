import React, { useEffect, useState } from 'react';
import { clientInfoData } from '../store/client/reducer';
import { connect } from 'react-redux';
import HttpInstance from "../utils/http";
import "./css/login.css";

const http = new HttpInstance();


async function getClients(setClients) {
  const res = await http.get('/clients');
  setClients(res || []);
}


const ListClients = ({ clientInfo }) => {
  const [clients, setClients] = useState([]);

  useEffect(async () => {
    await getClients(setClients);
  }, [clientInfo]);

  return (
    <div>
      {clientInfo && clientInfo.scope === 'admin' ?
        (
        <div>
          <ul>
            {clients.length ? (
              <div>
                <h1>Clientes</h1>
                {clients.map(client => (
                  <li key={client.id}>
                    Nombre: {client.username} - Id: {client.id}
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      clientInfo: clientInfoData(state)
  }
}

export default connect(mapStateToProps)(ListClients)
