import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const NavBar = ({ user, setUser }) => {
    return (
        <nav className="nav">
            <h1><Link to="/">Oscar Anillo</Link></h1>
            { 
            Object.keys(user).length ? 
                <>
                    <li>Hello {user.username}!</li>
                    <button onClick={() => setUser({})}>Logout</button>
                </>
                :
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            }
        </nav>
        
    )
}

NavBar.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func
}