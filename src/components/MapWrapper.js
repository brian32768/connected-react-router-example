import React from 'react'
import Map from './Map'

// Keep some center location here as our default
// until some other value is loaded in from the url

const state = {
    x: -123,
    y: 46
};

const MapWrapper = ({query}) => {
    console.log("MapWrapper", query);
    try {
        if (query.lon) {
            state.lon = query.lon;
        }
        if (query.lat) {
            state.lat = query.lat;
        }
    } catch(err) {
        console.log("err=", err);
    }
    return (
      <div>
        <h1>Map</h1>
        <Map lat={ state.y } lon={ state.x } />
      </div>
    )
}

export default MapWrapper
