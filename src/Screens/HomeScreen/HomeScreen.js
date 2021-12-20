import {useEffect,useState} from 'react';
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeScreen.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function HomeScreen() {

    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
console.log(search)
    
    useEffect(() => {

        const fetchPost = async () => {
            const res = await axios.get("posts/"+search)
            console.log(res)
            setPosts(res.data)
        }
        fetchPost()
    }, [search])
    return (
        <>
        <Header/>
        <div className="homeScreen" >
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}
