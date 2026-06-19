import { useState } from 'react';

export const useSignUp = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    return formData.nombre !== '' && formData.email !== '' && formData.password.length >= 6;
  };

  return { formData, handleChange, validate };
};