import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "../context/auth.context";
import type { User } from "../types";

interface AuthProviderProps {
  children: ReactNode;
}

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Verifica si existe una sesión guardada al cargar la aplicación
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedToken && storedEmail) {
      setUser({
        email: storedEmail,
        token: storedToken,
      });
    }

    setLoading(false);
  }, []);

  // Función de logout que limpia la sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  };

  // Valor del contexto que se proveerá a los componentes
  const value = {
    user,
    setUser,
    isAuthenticated: !!user,
    logout,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
