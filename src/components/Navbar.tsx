import { LogOut, User } from "lucide-react";
import React from "react";
import { useAuth } from "../hooks/auth.hook";

// Componente de barra de navegación
const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ChallengeTenpo
            </h1>
          </div>
          <div className="flex items-center">
            {/* Información del usuario y botón de logout para pantallas medianas y grandes */}
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mr-4">
                <User className="h-5 w-5" />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </button>
            </div>
            {/* Botón de logout para móviles */}
            <div className="flex items-center md:hidden">
              <button
                onClick={logout}
                className="inline-flex items-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
