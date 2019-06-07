import React from 'react'
import LatLonForm from './latlonform'
import { connect } from 'react-redux'

const mapPicture = require('/assets/one-eyed.jpg')

const Map = ({ center }) => {
    let lon = 0
    let lat = 0
    try {
        lon = center[0]
        lat = center[1]
    } catch(err) {
        console.log('render err=', err, ' center=', center)
    }
    return (
        <>
            <LatLonForm />
            A map centered at ({lat}, {lon}) goes here.
            <img src={ mapPicture } />
        </>
    )
}

const mapStateToProps = state => ({
    center: state.map.center,
})

export default connect(mapStateToProps)(Map)
