import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
    <div
      style={{
        marginTop: '20px',
        marginBottom: '20px',
        maxWidth: 960,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <p style={{ margin: 10 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: 'rgb(0, 0, 0)'
          }}
        > home </Link>
      </p>
      <p style={{ margin: 10 }}>
        <Link
          to="/exhibitions"
          style={{
            textDecoration: `none`,
            color: 'rgb(0, 0, 0)'
          }}
        > exhibitions </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
