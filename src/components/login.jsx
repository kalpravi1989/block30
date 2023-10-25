import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login({token,setToken,url}){

    const navigate=useNavigate();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [error,setError]=useState(null);

    
    async function handleSubmit(event) {
    event.preventDefault();
    
    try{
     const response=await fetch(`${url}/users/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            user: {
              username: `${userName}`,
              password: `${passWord}`
            }
          })
    });
    const result = await response.json();
    const tok=result.data.token;
    console.log(result);
    setToken(tok);
     return result;
   
   
      } 
    catch(error){
       setError(error.message);
    }
  
    };
    const navigatetoPost=()=>{
      navigate('/');
    }
    return (
        <>
        <h2>Login</h2>
       <form onSubmit={handleSubmit}>
        <label>
        Username: <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </label><br/><br/>
        <label>
        Password: <input value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
        </label><br/><br/>
        <button >Submit</button>
       </form>
       {token&&navigatetoPost()}
        </>
    );
}