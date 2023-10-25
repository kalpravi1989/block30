import { useState } from "react";
export default function Register({setToken,url}){
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [error,setError]=useState(null);

 async function handleSubmit(event) {
    event.preventDefault();
    console.log({userName});
    console.log({passWord});
    try{
     const response=await fetch(`${url}/users/register` ,{
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
    console.log(tok);
    setToken(tok);
     return result;
   
   
      } 
    catch(error){
       setError(error.message);
    }
  }
    return (
    <div className="signUp">
    <h2>Sign Up!</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSubmit}>
  <label>
    Username: <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
  </label><br/><br/>
  <label>
    Password: <input value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
  </label><br/><br/>
  <button >Submit</button>
</form>

    </div>
)}