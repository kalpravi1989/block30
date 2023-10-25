import { useEffect } from "react";
import { useState } from "react";
export default function Profile({url,token}){
    const [userPost,setUserPost]=useState([]);
    const[userMessage,setUserMessage]=useState([]);

    useEffect(()=>{
       
        const getprofile=async()=>{
            const response=await fetch(`${url}/users/me`,{
            
            headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
             },
             });
            const result= await response.json();
            setUserPost(result.data.posts);
            setUserMessage(result.data.messages)
            console.log(result.data.posts)
            console.log(result.data.messages)
            console.log(result);
            return result;

    }
    getprofile();
    },[])

    return(
        <>
        
            <ul>
                <h2>Posts</h2>
                {userPost.map(p=>{
                 <li >
                    
                 <h1>{p.title}</h1>
                 <h2>{p.description}</h2>
                 <h3>Author:{p.author.username}</h3>
                 <p>Price:{p.price}</p>
                 <p>Location:{p.location}</p>
                

                 </li>
                }
                
                )}
            </ul>
       
        </>
    );
}
