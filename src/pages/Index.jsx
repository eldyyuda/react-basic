import postData from '../posts.json';
import Article from '../components/article';
import Search from '../components/Search';
import { useState,useEffect } from 'react';
function Homepage() {
    const [posts, setPosts] = useState(postData);
    const [totalPosts, setTotalPosts] = useState(0);
    // const [externalPosts, setExternalPosts] = useState([]);
    const onSearchChange = (value) => {
        const filteredPosts = postData.filter((item) => {
            return item.title.toLowerCase().includes(value.toLowerCase());
        });
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>res.json())
    //     .then(json=>{
    //         setExternalPosts(json);
    //     })

    // },[]);
    useEffect(() => {
        console.log("post new");
    }, [posts]);


    return (
        <>
        <h1>Blog</h1>
        <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
        <div>
            {posts.map((props,index) => (
                <Article {...props} key={index}/>
                // return <Article title={post.title} tags={post.tags} dates={post.date}/>
            ))}
        </div>
        <hr />
        {/* <div>{externalPosts.map((props,index) => (
            <div key={index}>{props.title}</div>
            // return <Article title={post.title} tags={post.tags} dates={post.date}/>
        ))}</div> */}
        </>
    )
}

export default Homepage