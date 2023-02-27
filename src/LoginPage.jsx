import React from 'react'
import react, {useState} from "react"

export default function LoginPage() {

    const [email,setEmail]=useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        console.log(email);
    }
  return (
    
   <>
   <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='snp@gmail.com' id="email" name="email" />
      <label htmlFor="Password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
      <button type='submit'>Log In</button>
    </form>
    <button>Don't Have an Acount ? Register Here</button>
    </>

  )
}
