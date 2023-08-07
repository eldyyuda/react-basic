import { useState } from 'react';

function Search(props) {
    const [search, setSearch] = useState('');
    const onSearchChange = () => {
        props.onSearchChange(search);
    };
    const searcKeydown = (e) => {
        if (e.key ==="Enter") {
            onSearchChange();
        }
    };
    return (
        <>
        <div>
            Cari Artikel : <input type="text" onChange={(e)=>setSearch(e.target.value)} onKeyDown={searcKeydown}/>
            <button onClick={onSearchChange}>Cari</button>
        </div>
            <small>ditemukan {props.totalPosts} data dengan kata kunci {search}</small>
        </>

    )
}

export default Search