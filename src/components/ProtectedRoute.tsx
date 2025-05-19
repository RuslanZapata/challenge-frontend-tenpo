import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/auth.hook";
import Navbar from "./Navbar";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

// Componente que protege las rutas privadas
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Muestra un spinner mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Redirige al login si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default ProtectedRoute;
