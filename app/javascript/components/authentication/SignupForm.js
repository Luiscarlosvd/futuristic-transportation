import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { createUser } from '../../redux/userSlice';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div>
      <div className="w-full h-screen bg-signup">
        <div className="bg-image-form w-full h-screen grid place-content-center">
          <div className="form-bg px-3 py-6 flex flex-col gap-10 items-center rounded-lg">
            <h1 className="font-ace text-3xl text-white text-shadow-title">Sign Up</h1>
            <form
              className="flex flex-col gap-7 items-center text-center"
              onSubmit={handleSubmit((data) => dispatch(createUser({ user: data })))}
            >
              <div className="flex flex-col gap-1">
                <span className="font-bold text-red-600">{errors.name?.message}</span>
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="username"
                  name="name"
                  {...register('name', { required: 'Username is required.' })}
                  className="font-ace text-lg form-input placeholder-white py-3 px-5"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-red-600">{errors.email?.message}</span>
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  {...register('email', { required: 'Email is required.' })}
                  className="font-ace text-lg form-input placeholder-white py-3 px-5"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-red-600">{errors.password?.message}</span>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  {...register('password', { required: 'Password is required (More than 6 digits).' })}
                  className="font-ace text-lg form-input placeholder-white py-3 px-5"
                />
              </div>
              <button type="submit" className="bg-white font-ace text-slate-600 py-2 px-5 rounded-full transition-scale shadow-md">
                Register
              </button>
            </form>
            <p className="text-white">
              Go back to
              {' '}
              {' '}
              <Link to="/log-in" className="underline text-primaryGreen">Login</Link>
              {' '}
              {' '}
              page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
