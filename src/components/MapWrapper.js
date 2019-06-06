import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map'
import { connect } from 'react-redux'

// Keep some center location here as our default
// until some other value is loaded in from the url

const state = {
    x: -123,
    y: 46
};

const MapWrapper = ({query}) => {
    console.log("MapWrapper", query);
    try {
        const lat = Number(query.lat)
        const lon = Number(query.lon)
        if (lon) state.x = lon;
        if (lat) state.y = lat;
    } catch(err) {
        console.log("err=", err);
    }
    return (
      <>
        <h1>Map</h1>
        <Map lat={ state.y } lon={ state.x } />
      </>
    )
}

MapWrapper.propTypes = {
  query: PropTypes.object,
}

// These props are coming from the Redux state,

const mapStateToProps = state => ({
  query: state.router.location.query,
})

export default connect(mapStateToProps)(MapWrapper)
