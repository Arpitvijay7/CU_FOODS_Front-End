import React, { useState } from 'react';
const ResetPwd = () => {
  const css = `
  body{
    background-color: #194944;
  }
`

  const[oldPwd,setOldPwd]=useState();
  const[newPwd,setNewPwd]=useState();
  const[newPwd2,setNewPwd2]=useState();
  const handleClick=()=>{
        window.alert(oldPwd);
        window.alert(newPwd);
        window.alert(newPwd2);
  }
  return (
    <>
    <style>{css}</style>
    <div className='h-full w-screen justify-center'>
    <div className="w-11/12 sm:w-2/3 lg:w-1/3 xl:w-/3 2xl:1/3 p-2 bg-white rounded-lg mx-auto flex flex-col items-center border-2 my-5 ">
    <div className='sm:mt-5'>   
    <svg className='w-48 sm:w-56' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
    </div>
      <h1 className="mb-2 text-2xl sm:text-4xl font-bold">Reset Password</h1>
      <div className='bg-green-200 rounded p-3 sm:p-5 my-4 mx-2 sm:mx-10'>
        <p className='mb-2 font-bold text-sm sm:text-base text-dark-green'>Please create a new password that you dont use on any other site</p>
      </div>
      <form className="w-full max-w-sm pb-2 sm:pb-10 px-3 sm:px-0" method='POST'>
        <label className='font-bold'>Old Password :</label>
        <input className="shadow appearance-none border py-1 sm:py-2 mb-2 rounded-lg w-full px-3 text-gray-700 leading-tight " value={oldPwd} onChange={(e)=>setOldPwd(e.target.value)} type="password" id="email" name="email" required />
        <label className='font-bold'>New Password :</label>
        <input className="shadow appearance-none border py-1 sm:py-2 mb-2 rounded-lg w-full px-3 text-gray-700 leading-tight " value={newPwd} onChange={(e)=>setNewPwd(e.target.value)} type="password" id="phone" name="phone" required />
        <label className='font-bold'>Confirm New Password :</label>
        <input className="shadow appearance-none border py-1 sm:py-2 mb-2 rounded-lg w-full px-3 text-gray-700 leading-tight " value={newPwd2} onChange={(e)=>setNewPwd2(e.target.value)} type="password" id="phone" name="phone" required />
        <button className="transition duration-150 ease-out hover:ease-in bg-dark-green text-white w-full font-bold py-2 sm:py-3 px-4 mt-7 rounded-lg" type="submit" onSubmit={(e)=>e.preventDefault()} onClick={handleClick}>Set Password</button>
      </form>

    </div>
    </div>
    </>
  );
};

export default ResetPwd;






