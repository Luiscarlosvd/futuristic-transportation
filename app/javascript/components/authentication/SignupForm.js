import React from 'react';
import { createUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="w-full h-screen bg-signup">
        <div className="bg-image-form w-full h-screen grid place-content-center">
          <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
            <h1 className="font-ace text-2xl text-white text-shadow-title">Sign Up</h1>

            <form 
              className="flex flex-col gap-7 items-center"
              onSubmit={handleSubmit((data) => dispatch(createUser( { user: data })))}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name")}
                className="font-ace text-lg border-white rounded-full placeholder-white py-5"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email")}
                className="font-ace text-lg border-white rounded-full placeholder-white py-5"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password")}
                className="font-ace text-lg border-white rounded-full placeholder-white py-5"
              />
              <button type="submit" className="bg-white font-ace text-slate-600 py-2 px-5 rounded-full transition-scale shadow-md">
                Register
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
