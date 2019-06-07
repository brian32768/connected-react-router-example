import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push, replace } from 'connected-react-router'

const LatLonForm = (props) => {

    // Keep the state here until we're ready to submit
    const [lat, setLat] = useState("46");
    const [lon, setLon] = useState("-123");

    const onSubmit = (e) => {
        try {
            // Do a little bound check here, don't push a bad URL.
            const nLat = Number(lat)
            const nLon = Number(lon)
            if ((nLat >= 44 && nLat <= 48) && (nLon >= -126 && nLon <= -123)) {
                props.replace('/map?lat=' + nLat + '&lon=' + nLon)
            } else {
                console.log("Bad input", lat, lon)
            }
        } catch (err) {
            console.log("Bad input", err)
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                lat <input type="text" value={lat} onChange={e=>setLat(e.target.value)}/>
            </label>
            <label>
                lon <input type="text" value={lon} onChange={e=>setLon(e.target.value)}/>
            </label>
            <input type="submit" value="Go"/>
        </form>
    )
}

const mapStateToProps = state => ({
    center: state.map.center,
})

const mapDispatchToProps = {
    replace,  push
};

export default connect(mapStateToProps, mapDispatchToProps)(LatLonForm)
