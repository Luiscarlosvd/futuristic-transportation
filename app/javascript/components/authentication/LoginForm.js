import React, { useState } from 'react';
import { loginUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-full h-screen bg-registration">
      <div className="bg-image-form w-full h-screen grid place-content-center">
        <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
          <h1 className="font-ace text-2xl text-white text-shadow-title">Log In</h1>
          <form 
            className="flex flex-col gap-7 items-center"
            onSubmit={handleSubmit((data) => dispatch(loginUser(data)))}
          >
            <input
              type="text"
              placeholder="Email or Username"
              name="login"
              {...register("login")}
              className="font-ace text-lg border-white rounded-full placeholder-white py-5"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
              className="font-ace text-lg border-white rounded-full placeholder-white py-5"
            />
            <button
              type="submit"
              className="bg-white font-ace text-slate-600 py-2 px-5 rounded-full transition-scale shadow-md"
            >
              Log In
            </button>
          </form>
          <p className="text-white">
            You don&apos;t have an account?
            <Link to="/sign-up" className="underline text-blue-700"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
