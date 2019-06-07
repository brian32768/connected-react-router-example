import { push, replace } from 'connected-react-router'

// Map reducer
const initialState = {
    center: [-123, 46],
    zoom: 4
}

const mapReducer = (state = initialState, action) => {
    let newState;
    console.log("mapReducer \""+ action.type+ "\"");
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            try {
                const ll = action.payload.location.query
                const lat = Number(ll.lat)
                const lon = Number(ll.lon)
                console.log("Old state", state);
                newState = {
                    center: [lon, lat]
                };
                console.log("New state", newState);
            } catch(err) {
                console.error(err, "shift did not happen", action);
                return state
            }
            break;

        case 'SETCENTER':
            try {
                const ll = action.payload.center
                const lat = Number(ll[1])
                const lon = Number(ll[0])
                if ((lat < 44 || lat > 48) || (lon < -126 || lon > -123)) {
                    console.log("Can't go there, so no state change.")
                    return state;
                }
                console.log("Old state", state);
                newState = {
                    center: [lon, lat]
                };
                console.log("New state", newState);
            } catch(err) {
                console.error(err, "setCenter did not happen", action);
                return state
            }
            break;

        case 'SETZOOM':
            newState = {
                zoom: action.payload.zoom,
            };
            break;
        default:
            newState = state;
    }
    return newState
}

export default mapReducer
