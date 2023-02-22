import { useEffect, useState } from "react";




function Content() {
    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    // https://jsonplaceholder.typicode.com/posts
    const tabs = ['posts', 'comments', 'albums','photos','todos','users']
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => setData(data))
        
    }, [type])
    console.log(data)
    return (
        <div>
            {tabs.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setType(item)}
                >{item}</button>
            ))}


            <ul>
                {data.map(value => (<li>{value.title || value.name}</li>))}
            </ul>
        </div>
    );
}

export default Content;