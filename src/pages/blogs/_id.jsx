// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
    // const params = useParams();
    // const [post, setPost] = useState([]);
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //         .then((res) => res.json())
    //         .then((data) => setPost(data));
    // },[])
    const post = useLoaderData();
    return (
        <>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </>
    )
}

export default SinglePost