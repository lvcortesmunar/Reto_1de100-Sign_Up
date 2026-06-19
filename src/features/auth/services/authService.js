// src/features/auth/services/authService.js

export const registerUser = async (userData) => {
  // Simulación de una llamada a un servidor (API)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Enviando datos al servidor:', userData);
      // Simulamos que el registro fue exitoso
      resolve({ success: true, message: 'Usuario registrado correctamente' });
    }, 1500);
  });
};