import { useState } from "react";

export default function CreatePost({token,url}){

 const [title,setTitle]=useState('');
 const [description,setDescription]=useState('');
 const [price,setPrice]=useState(0);
 

 const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
        const response = await fetch(`${url}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              title:  `${title}`,
              description:  `${description}`,
              price:  `${price}`,
              willDeliver: false
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
 }


    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>
        Post Title: <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label><br/><br/>
        <label>
        Description: <input value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label><br/><br/>
        <label>
        Price: <input value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label><br/><br/>
        <button >Submit</button>

        </form>
        </>
    );
}