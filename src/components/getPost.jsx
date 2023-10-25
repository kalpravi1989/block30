import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CreatePost from "./createPost";

export default function DisplayPost({url,token}){
   
    const navigate=useNavigate();
const [post,setPost]=useState([]);

    useEffect(()=>{
       
        const getposts=async()=>{
            const response=await fetch(`${url}/posts`)
            const result= await response.json();
            const posts=result.data.posts;
            console.log(url);
            console.log(token);
            console.log(result);
            console.log(posts);
            setPost(posts);
            return result;

    }
    getposts();
    },[])

   const navtoCreatePost=()=>{
     navigate('/createpost',{url:url,token:token})

   const handleDelete=async(id)=>{
    const response=await fetch(`${url}/posts`)
    const result= await response.json();
    console.log(result);
   }  
   }


    return(
    <>
   { token&& <button onClick={navtoCreatePost}>create post</button>}
   
     <ul>
                {post.map(p=>(
                <li key={p._id}>
                    
                    <h1>{p.title}</h1>
                    <h2>{p.description}</h2>
                    <h3>Author:{p.author.username}</h3>
                    <p>Price:{p.price}</p>
                    <p>Location:{p.location}</p>
                   

                    </li>
                    )
                    )}
            </ul>
    </>
    );
}