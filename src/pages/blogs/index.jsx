// import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
function blog() {
    // const [Posts, setPosts] = useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>res.json())
    //     .then(json=>{
    //         setPosts(json);
    // })},[]);
    const posts = useLoaderData();
    
    return (
        <>
        <h1>Blog</h1>
            <div>{posts.map((post,index) => (
            <div key={index}>
                {post.title} {" - "}
                <Link to={`/blogs/${post.id}`}><button>View</button></Link>
            </div>
            // return <Article title={post.title} tags={post.tags} dates={post.date}/>
        ))}</div>
        </>
    )
    
}
export default blog