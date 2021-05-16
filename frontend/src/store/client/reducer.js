const initialState = {
    clientInfo: {
        id: null,
        name: null,
        scope: null
    }
}

export default (state = initialState, action) => {
    if (action.type === 'MODIFY_CLIENT_INFO') {
        return {
            ...state,
            clientInfo: action.payload,
        }
    }

    return state;
};

export const clientInfoData = state => state.clientReducer.clientInfo;
