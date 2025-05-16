import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Loginpage = () => {
   const [email , setemail] = useState("");
   const [pass , setpass] = useState("");


     const handleemailInput = (e) => {
  setemail(e.target.value)
  };


     const handlepassInput = (e) => {
  setpass(e.target.value)
  };


    const handlesubmit = async (e)=>{
e.preventDefault();

const user = await axios.post("http://localhost:3000/login" , {
    email,
    pass
}).catch(()=>{
    console.log("error found")

});




console.log(user);




    };

  return (
 <div>
    <div className='m-6 c-5 text-black'>
        <input type="email"    value={email} onChange={handleemailInput} placeholder='email' />
        <input type="password"  value={pass} onChange={handlepassInput} placeholder='enter password' />
        <button onClick={handlesubmit}>LogIn</button>
    </div>
 </div>
  )
}

export default Loginpage
