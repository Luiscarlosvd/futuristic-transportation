import React from 'react';

const SignupForm = () => (
  <div className='w-full h-screen bg-slate-600'>
    <div className='bg-image-form w-full h-screen grid place-content-center'>
      <div className='form-bg px-32 py-16 flex flex-col gap-20 items-center rounded-lg'>
        <h1 className='font-ace text-2xl text-white'>Sign Up</h1>
        <form className='flex flex-col gap-7 items-center'>
          <input type='text' placeholder='Username' className='font-ace border-white rounded-full'/>
          <button type='submit' className='bg-white font-ace text-slate-600 py-1 px-4 rounded-full'> Register </button>
        </form>
      </div>
    </div>
  </div>
);

export default SignupForm;
