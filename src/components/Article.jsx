import { useContext } from "react";
import  {GlobalContext} from '../context/Index.js'

const ArticleStatus=(isNew)=>{
    return isNew && <span> == Baru !!!</span>;
}
const NewArticle=()=>{
    return <span> == Baru !!!</span>;
}


function Article(props) {
    const { title, tags, dates,isNew } = props
    const user = useContext(GlobalContext)
    return (
        <>
        <div>
            <h1>{title}</h1>
            <small>
                date:{dates}, tags: {tags.join(', ')}
                {/* {isNew ? " --Baru ": "lama"} */}
                {/* {isNew && " --Baru "} */}
                {/* <ArticleStatus isNew={isNew}></ArticleStatus> */}
                {isNew && <NewArticle></NewArticle>}
            </small>
            <br />
            <small>
                Penulis : {user.username}
            </small>
            {/* <p>{props.bodys.map((body) => {
                return <div>{body}</div>
            })}</p> */}
        </div>
        </>
    );
}

export default Article