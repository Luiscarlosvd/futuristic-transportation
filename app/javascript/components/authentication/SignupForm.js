import React, { useState } from 'react';

const SignupForm = () => {
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

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: { name: formData.name, email: formData.email, password: formData.password },
        }),
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
    <div>
      <div className="w-full h-screen bg-signup">
        <div className="bg-image-form w-full h-screen grid place-content-center">
          <div className="form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg">
            <h1 className="font-ace text-2xl text-white text-shadow-title">Sign Up</h1>

            <form className="flex flex-col gap-7 items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="font-ace text-lg border-white rounded-full placeholder-white py-5"
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="font-ace text-lg border-white rounded-full placeholder-white py-5"
              />
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
