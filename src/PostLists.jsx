import React from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import {useState} from "react";

function PostLists() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [post, setPost] = useState("");

    // Get method with axios
    const endpoint = "https://63f9dd15beec322c57e8ec00.mockapi.io/testPeople"
    const getPost = async () => {
      await Axios.get(endpoint).then((response)=> {
            setPost(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });    
    };

    // post method with axios
    const addPost = async () => {
        const data = { name, age};
        await Axios.post("https://63f9dd15beec322c57e8ec00.mockapi.io/testPeople", data
        );
    }
    return(
        <>
        <h1>hi d</h1>
        <button type="submit" className="shp" onClick={getPost}>Get Posts</button>
        {post && <pre>{JSON.stringify(post)}</pre>}
        <button type = "submit" className="php" onClick={addPost}>post</button>
        <button>delete</button>
        <Link  to="/">Home</Link>
        </>
    )
}
export default PostLists;