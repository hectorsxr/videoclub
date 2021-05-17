import React from 'react';
import { clientInfoData } from '../store/client/reducer';
import { connect } from 'react-redux';

const ClientInfo = ({ clientInfo }) => 
    <div>
        <h1>Información del cliente:</h1>
        <p>Id: {clientInfo.id}</p>
        <p>Nombre: {clientInfo.username}</p>
        <p>Tipo de usuario: {clientInfo.scope}</p>
    </div>

const mapStateToProps = (state) => {
    return {
        clientInfo: clientInfoData(state)
    }
}

export default connect(mapStateToProps)(ClientInfo)