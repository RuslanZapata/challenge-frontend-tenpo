import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./providers/auth";

// Componente principal de la aplicación que configura:
// - El sistema de enrutamiento
// - El contexto de autenticación
// - Las rutas públicas y privadas
function App() {
  return (
    // AuthProvider envuelve toda la aplicación para proporcionar
    // el contexto de autenticación a todos los componentes
    <AuthProvider>
      {/* Router configura el sistema de navegación de la aplicación */}
      <Router>
        <Routes>
          {/* Ruta pública para la página de login */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          {/* Ruta protegida para la página principal (home) */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* Redirección de rutas desconocidas al home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
