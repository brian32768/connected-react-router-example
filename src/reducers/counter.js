const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'INCREMENT':
            newState = {
                counter: state.counter + 1
            };
            break;
        case 'DECREMENT':
            newState = {
                counter: state.counter - 1
            };
            break;
        default:
            newState = state;
    }
    return newState;
}

export default counterReducer
