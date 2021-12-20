import './Post.css';
import {Link} from 'react-router-dom'

export default function Post({post}) {
    const PF = "http://localhost:7000/images/";
    return (
        <div className="post">
            {post.photo && (
            <img 
            className="post__img"
            src={PF + post.photo}
            alt={post.title}
            />
            )}
            <div className="post__info">
                <div className="post__categories">
                    {
                    post.categories.map((c)=> (
                        <span className="post__category">{c.name}</span>
                    ) )
                    }
                </div>
                <Link className='link' to={`/posts/${post._id}`}>
                <span className="post__title">
                    {post.title}
                </span>
                </Link>
                
                <hr/>
                <span className="post__date"> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post__desc">{post.desc}</p>
        </div>
    )
}
