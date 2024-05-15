import { useState } from "react";

export const FormValidation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        let valid = true;
        const newErrors = {};
    
        if (!formData.username.trim()) {
          newErrors.username = 'Username is required';
          valid = false;
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
          valid = false;
        }
    
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value,
        });
        setErrors((prevErrors) => ({...prevErrors,
          [name]: '', 
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Submitting data:', formData);
        } else {
          console.log('Form has errors');
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <button type="submit" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-green-600">Submit</button>
        </form>
      );
    }