import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const HelloChild = ({ pathname, hash, search }) => {
    console.log("Hello Child")
    return (
        <>
        <h2>Hello Child</h2>
        <ul>
          <li><Link to="/hello?color=Blue&size=40">with query string</Link></li>
          <li><Link to="/hello#lovelove">with hash</Link></li>
        </ul>
        <div>
          pathname: {pathname}
        </div>
        <div>
          hash: {hash}
        </div>
        <div>
          search: {search}
        </div>
        </>
    )
}

HelloChild.propTypes = {
  pathname: PropTypes.string,
  hash: PropTypes.string,
  search: PropTypes.string,
}

// These props are coming from the Redux state,

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  hash: state.router.location.hash,
  search: state.router.location.search,
  //query: state.router.location.query,
})

export default connect(mapStateToProps)(HelloChild)
