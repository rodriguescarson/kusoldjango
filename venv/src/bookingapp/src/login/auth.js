const InitialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : null,
    user : null
};

export default function(state = InitialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
