const updateClientInfo = (clientInfo) => {
    console.log(clientInfo)
    return {
        type: 'MODIFY_CLIENT_INFO',
        payload: clientInfo,
    }
}
export default updateClientInfo;
