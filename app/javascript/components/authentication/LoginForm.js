import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User logged succesfully');
      } else {
        console.error('Error al crear el usuario');
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
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="font-ace text-lg border-white rounded-full placeholder-white py-5"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
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

// import React from 'react';
// import { Link } from 'react-router-dom';

// const LoginForm = () => (
//   <div className="w-full h-screen bg-registration">
//     <div className="bg-image-form w-full h-screen grid place-content-center">
//       <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
//         <h1 className="font-ace text-2xl text-white text-shadow-title">Sign In</h1>
//         <form className="flex flex-col gap-7 items-center">
//           <input type="text" placeholder="Username"
// className="font-ace text-lg border-white rounded-full placeholder-white py-5" />
//           <button type="submit"
// className="bg-white font-ace text-slate-600 py-2 px-5
// rounded-full transition-scale shadow-md"> Log In </button>
//         </form>
//         <p className="text-white">
//           You don&apos;t have an account?
//           <Link to="/sign-up" className="underline text-blue-700"> Register</Link>
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default LoginForm;
