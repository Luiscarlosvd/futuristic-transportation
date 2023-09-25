import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => (
  <div className="w-full h-screen bg-signup">
    <div className="bg-image-form w-full h-screen grid place-content-center">
      <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
        <h1 className="font-ace text-2xl text-white text-shadow-title">
          Sign Up
        </h1>
        <form className="flex flex-col gap-7 items-center">
          <input
            type="text"
            placeholder="Username"
            className="font-ace text-lg border-white rounded-full placeholder-white py-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="font-ace text-lg border-white rounded-full placeholder-white py-5"
          />
          <button
            type="submit"
            className="bg-white font-ace text-slate-600 py-2 px-5 rounded-full transition-scale shadow-md"
          >
            {' '}
            Register
            {' '}
          </button>
        </form>
        <p className="text-white">
          Already have an acount?
          <Link to="/log-in" className="underline text-blue-700">
            {' '}
            Sign In
            {' '}
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default SignupForm;
