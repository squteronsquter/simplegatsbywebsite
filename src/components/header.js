import React from 'react'
import { Link } from 'gatsby'

export default function header(props) {
    return (
        <div className="wrapper">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <h1 className={props.styleClasses}>{props.headerText}</h1>
        </div>
    )
}
