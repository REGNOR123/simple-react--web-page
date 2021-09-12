import React from "react"
import {Link} from 'react-router-dom'
function Nav()
{
    return(
        <>
            <Link to="/">HOME</Link> <br/>
            <Link to="/about">ABOUT US</Link> <br/>
        </>
    )
}
export default Nav