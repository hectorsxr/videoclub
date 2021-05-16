import React from 'react';
import { clientInfoData } from '../store/client/reducer';
import { connect } from 'react-redux';

const ClientInfo = ({ clientInfo }) => <div> Exists {clientInfo.id}-{clientInfo.username}-{clientInfo.scope}</div>

const mapStateToProps = (state) => {
    return {
        clientInfo: clientInfoData(state)
    }
}

export default connect(mapStateToProps)(ClientInfo)