import React from 'react'
import { Link } from 'react-router-dom'

function NavComp() {
    return (
        <div>
            {/* <h2>Nav Component</h2> */}

            <Link to = "/main/about" className='btn btn-outline-primary'>About</Link>
            <Link to = "/main/menu" className='btn btn-outline-danger'>Menu</Link>
            <Link to = "/main/contact" className='btn btn-outline-danger'>Contact</Link>
            <Link to = "/main/store" className='btn btn-outline-danger'>Store</Link>

            
        </div>
    )
}

export default NavComp
