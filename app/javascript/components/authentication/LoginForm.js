import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="w-full h-screen bg-signup">
      <div className="bg-image-form w-full h-screen grid place-content-center">
        <div className="form-bg px-3 py-6 flex flex-col gap-10 items-center rounded-lg">
          <h1 className="font-ace text-3xl text-white text-shadow-title">Log In</h1>
          <form
            className="flex flex-col gap-6 items-center"
            onSubmit={handleSubmit((data) => dispatch(loginUser(data)))}
          >
            <span className="font-bold text-red-600">{errors.login?.message}</span>
            <input
              type="text"
              placeholder="Email or Username"
              autoComplete="username"
              name="login"
              {...register('login', { required: 'The Username or Email is required.' })}
              className="font-ace text-lg form-input placeholder-white py-3 px-5"
            />
            <span className="font-bold text-red-600">{errors.password?.message}</span>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              {...register('password', { required: 'The correct password is required.' })}
              className="font-ace text-lg form-input placeholder-white py-3 px-5"
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
            {' '}
            {' '}
            <Link to="/sign-up" className="underline text-primaryGreen">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
