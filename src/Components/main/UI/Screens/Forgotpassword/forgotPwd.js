import React, { useState } from 'react';
const ForgotPwd = () => {
  const css = `
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  body{
    background-color: #194944;
  }
`

  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();
  const [type,setType]=useState(0);
  const handleType=()=>{
    type?setType(0):setType(1);
  }
  const handleClick=()=>{
    type?window.alert(email):window.alert(phone);
  }
  return (
    <>
    <style>{css}</style>
    <div className='h-full w-full'>
    <div className="w-11/12 sm:w-2/3 lg:w-1/3 xl:w-/3 2xl:1/3 bg-white p-2 sm:px-10 rounded-lg mx-auto my-auto flex flex-col items-center border-2 my-10 sm:my-32 justify-center">


    <div className='mt-5'>   
    <svg className='w-56 bg-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
    </svg>
    </div>

      <h1 className="mb-2 text-4xl font-bold mx-auto">Forgot Password?</h1>
      <div className='bg-green-200 rounded my-5'>
      <p className='mmx-auto sm:ml-2 font-bold text-green-800 text-sm sm:text-base p-3 sm:p-5'>Enter the {type?"Email Address":"Phone Number"} assosciated with your account and we'll send you a link to reset your password.</p>
      </div>
      <form className="w-full max-w-sm" method='POST'>


    {type? 
      <div className='flex'>
      <div className='bg-stone-200 px-2 rounded-l-lg'>
        <span><i><svg className='w-8 m-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg></i>
      </span>
      </div>
        <input className="shadow appearance-none border rounded-r-lg w-full -pb-1 px-3 text-gray-700 leading-tight " value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder='Enter Your Email Address' required autocomplete="off"/>
      </div>:<div className='flex'>
      <div className='bg-stone-200 px-2 rounded-l-lg'>
        <span><i><svg className='w-8 m-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
        </svg>
      </i>
      </span>
      </div>
        <input className="shadow appearance-none border rounded-r-lg w-full -pb-1 px-3 text-gray-700 leading-tight " value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" id="phone" name="phone" placeholder='Enter Your Phone Number' required />
      </div>}
      <button className="bg-dark-green text-white w-full font-bold py-2 px-4 mb-3 mt-3 rounded-lg" type="submit" onSubmit={(e)=>e.preventDefault()} onClick={handleClick}>Send Reset Link</button>
      <p className="text-sm underline hover:cursor-pointer text-center mb-10" onClick={handleType}>Verify using{type?" phone number":" email"}?</p>
      </form>
    </div>
    </div>
    </>
  );
};

export default ForgotPwd;






