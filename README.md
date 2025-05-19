# ChallengeTenpo - React TypeScript Application

Esta aplicación implementa un sistema de login y visualización de datos utilizando React y TypeScript.

## Características

- Sistema de autenticación simulado con almacenamiento de token
- Rutas públicas y privadas
- Diseño responsive para web y móvil
- Visualización de 2000 items desde JSONPlaceholder API
- Renderizado eficiente usando virtualización
- Configuración de Axios con interceptores de token

## Stack Tecnológico
- **Frontend**: React con TypeScript
- **Enrutamiento**: React Router
- **Cliente HTTP**: Axios
- **Estilos**: TailwindCSS
- **Iconos**: Lucide React
- **Gestión de Estado**: Context API
- **Fuente de Datos**: JSONPlaceholder API

## Inicio Rápido

### Prerrequisitos

- Node.js (v14 o superior)
- npm

### Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/RuslanZapata/challenge-frontend-tenpo
cd challengetenpo
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar servidor de desarrollo
```bash
npm run dev
```

4. La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto
```
src/
├── api/          # Configuración de API y servicios
├── components/   # Componentes UI reutilizables
├── context/      # Proveedores de Context
├── pages/        # Componentes de páginas
├── types/        # Definiciones de tipos TypeScript
└── hooks/        # Custom hooks reutilizables
```

## Autenticación

El sistema utiliza una autenticación simulada:
- Validación de formato de email
- Generación de token falso
- Almacenamiento del token en memoria (Context) y localStorage
- Inclusión automática del token en cabeceras de peticiones

## Estrategia de Renderizado de Lista

Para manejar eficientemente la lista de 2000 elementos, se implementa:
- Técnica de virtualización que solo renderiza elementos visibles
- Grid responsivo: 2 columnas en móvil, 3 en desktop
- Cálculo de posiciones basado en scroll
- Buffer de renderizado para scroll suave
