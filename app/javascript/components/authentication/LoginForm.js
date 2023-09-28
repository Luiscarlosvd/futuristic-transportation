import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.replace('/');
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-registration">
      <div className="bg-image-form w-full h-screen grid place-content-center">
        <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
          <h1 className="font-ace text-2xl text-white text-shadow-title">Log In</h1>
          <form className="flex flex-col gap-7 items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Username"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              className="font-ace text-lg border-white rounded-full placeholder-white py-5"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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
