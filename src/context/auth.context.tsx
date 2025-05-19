import { createContext } from "react";
import type { User } from "../types";

// Define la interfaz del contexto de autenticación
interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  logout: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Crea el contexto de autenticación con el tipo definido arriba.
// El valor inicial es undefined, lo que obliga a que el Provider lo defina.
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
