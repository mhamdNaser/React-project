import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
      if (formData.email === storedData.email && formData.password === storedData.password) {
        alert(`Login successful! Welcome back, ${storedData.name}`);
      } else {
        alert('Login failed. Incorrect email or password');
      }
    } else {
      alert('No registered user found. Please register first.');
    }
  };

  return (
    <form className="row justify-content-center p-3 m-5" onSubmit={handleSubmit}>
        <div className='col-lg-6 border border-3 border-success p-5'>
            <div class="row g-2 mb-2">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div class="row g-2 mb-2">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div class="row g-2 mb-2">
                <button className="btn btn-success" type="submit">Submit</button>
            </div>
        </div>
    </form>
  );
};

export default LoginForm;