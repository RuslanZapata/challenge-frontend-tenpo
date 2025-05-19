import React from 'react';
import LoginForm from '../components/LoginForm';

// Muestra el formulario de login
const LoginPage: React.FC = () => {
  return (
    <div className="w-full max-w-md px-4">
      {/* Encabezado de la página */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">ChallengeTenpo</h1>
        <p className="text-gray-600 dark:text-gray-300">Ingresa tus credenciales para acceder al dashboard</p>
      </div>
      {/* Formulario de inicio de sesión */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;