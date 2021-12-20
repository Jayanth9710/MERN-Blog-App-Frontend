import {useState,useEffect} from 'react';
import axios from 'axios'
import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data)
        }
        getCats()
    },[] )
    return (
        <div className="sidebar">
            <div className="sidebar__item">
            <span className="sidebar__title"> About Me</span>
            <img></img>
            <p></p>
            </div>
            <div  className="sidebar__item">
                <span className="sidebar__title">Categories</span>
                <ul className="sidebar__list">
                    {cats.map((c)=> (
                        <Link className='link' to={`/?cat=${c.name}`}>
                        <li className="sidebar__listItem">{c.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__title">Follow</span>
                <div className="sidbebar__social">
                <i className=" sidebar__icon fab fa-facebook-square"></i>
            <i className=" sidebar__icon fab fa-twitter-square"></i>
            <i className=" sidebar__icon fab fa-pinterest-square"></i>
            <i className=" sidebar__icon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}
