import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    localStorage.setItem('formData', JSON.stringify(formData));
    alert(`Form submitted! Name: ${formData.name} Email: ${formData.email}`);
  };

  return (
    <form className="row justify-content-center p-3 m-5" onSubmit={handleSubmit}>
        <div className='col-lg-6 border border-3 border-success p-5'>
            <div class="row g-2 mb-2">
                <label>
                    Name:
                    <input 
                        className="form-control border border-3 border-success"  type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                </label>
            </div>
            <div class="row g-2 mb-2">
                <label>
                    Email:
                    <input 
                        className="form-control border border-3 border-success" 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} 
                     />
                </label>
            </div>
            <div class="row g-2 mb-2">
                <label>
                    Password:
                    <input 
                        className="form-control border border-3 border-success"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}  
                    />
                </label>
            </div>
            <div class="row g-2 mb-2">
                <button className="btn btn-success"  type="submit">Submit</button>
            </div>
        </div>
    </form>
  );
};

export default RegisterForm;