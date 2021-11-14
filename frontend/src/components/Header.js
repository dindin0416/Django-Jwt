import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>home</Link>
            <span>   </span>

            {user ? (
                <p onClick={logoutUser}>Logout</p>
            ):(
                <Link to='/login'>login</Link>
            )}
            

            {user && <p>hello {user.username}</p>}
            
        </div>
    )
}

export default Header
