const updateClientInfo = (clientInfo) => {
    return {
        type: 'MODIFY_CLIENT_INFO',
        payload: clientInfo,
    }
}
export default updateClientInfo;
