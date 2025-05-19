import type { LoginCredentials, User } from "../../types";

export const apiUserLogin = async (
  credentials: LoginCredentials
): Promise<User> => {
  // Simula delay de API
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Validación básica de credenciales
  if (!credentials.email.includes("@") || !credentials.password) {
    throw new Error("Invalid credentials");
  }

  // Genera token falso
  const fakeToken = `auth-token-${Math.random().toString(36).substring(2, 15)}`;

  // Guarda datos del usuario
  const userData: User = {
    email: credentials.email,
    token: fakeToken,
  };

  return userData;
};
