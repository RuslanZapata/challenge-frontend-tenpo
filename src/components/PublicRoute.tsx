import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/auth.hook";

interface PublicRouteProps {
  children?: React.ReactNode;
}

// Componente que maneja las rutas públicas
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Muestra un spinner mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Redirige al home si ya está autenticado
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {children || <Outlet />}
    </div>
  );
};

export default PublicRoute;
