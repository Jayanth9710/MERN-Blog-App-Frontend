import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import './Navbar.css'

export default function Navbar() {
    const {user,dispatch} = useContext(Context);
    const PF ="https://mern-blog-app-jay.herokuapp.com/images/"
    const handleLogout = () => {
        dispatch({ type:"LOGOUT" })
    }

    return (
        <div className='nav'>
            <div className="nav__left">
            <h3 className='logo'>Offsider</h3>
            </div>
            <div className="nav__center">
                <ul className="nav__list">
                    <li className="nav__list__item">
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className="nav__list__item">
                    <Link className='link' to="/about">About</Link>
                    </li>
                    <li className="nav__list__item">
                    <Link className='link' to="/contact">Contact</Link>
                    </li>
                    <li className="nav__list__item">
                    <Link className='link' to="/write">Jot</Link>
                    </li>
                    <li className="nav__list__item" onClick={handleLogout}>
                        { user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="nav__right">
              
                {
                    user ? (  <Link to="/edit" className='link'><img className="nav__avatar" src={PF + user.displayPicture} alt=""/></Link>) : 
                    (<ul className='nav__list'>
                        <li className='nav__list__item'>
                            <Link className='link' to="/login">Login</Link>
                        </li>
                        <li className='nav__list__item'>
                            <Link className='link' to="/register">Register</Link>
                             </li>
                    
                    </ul>
                    )
                }
               
            <i className=" nav__search__icon fas fa-search"></i>
            </div>
        </div>
    )
}
