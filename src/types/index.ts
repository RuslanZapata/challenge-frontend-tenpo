// Interfaz para el usuario autenticado
export interface User {
  email: string;
  token: string;
}

// Interfaz para las credenciales de login
export interface LoginCredentials {
  email: string;
  password: string;
}

// Interfaz para los posts de la API
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}