import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function FCreate(props) {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setTitle('');
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
       // alert("Title: " + `${title}` + " Cover: " + `${cover}` + " Author: " + `${author}`);
        const newBook = {
            title: title,
            cover: cover,
            author: author
        }
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res)=>{
                console.log(res);       
                navigate('/read');     
            })
            .catch((err)=>{console.log(err)});
    }

    return (
        <div>
            <h1>Good morning</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="My book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label>Add Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="My book Cover"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                </div>


                <div>
                    <label>Add Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="My book Author"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    ></input>
                </div>


                <input type="submit" value="Add Book"></input>
            </form>
        </div>
    )
}