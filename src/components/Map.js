import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Map = ({lat, lon}) => {
    console.log("Map", lat, lon)
    return (lat && lon)? (
        <>
            A map centered at (
            { lat },
            { lon }) goes here.
        </>
    ) :
    (
        <>
        A generic map goes here
        </>
    )
}

Map.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
}

// These props are pull from Redux state;
// history props will come from the ConnectedRouter

export default Map
