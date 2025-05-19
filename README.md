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
- npm o yarn

### Instalación

1. Clonar el repositorio
```bash
git clone https://your-repository-url.git
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
└── types/        # Definiciones de tipos TypeScript
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

## Mejoras Teóricas para Eficiencia de API

1. **Paginación y Lazy Loading**:
   - Implementar paginación del lado del servidor
   - Cargar datos por demanda según el scroll
   - Tamaño de página optimizado (ej: 50 items por request)

2. **Caché y Persistencia**:
   - Implementar caché local con React Query
   - Almacenar datos en IndexedDB para acceso offline
   - TTL (Time To Live) para invalidación de caché

3. **Optimización de Payload**:
   - Comprimir respuestas con GZIP
   - Implementar campos parciales (GraphQL-style)
   - Minimizar datos redundantes

4. **Rate Limiting y Throttling**:
   - Limitar frecuencia de requests
   - Implementar debounce en búsquedas
   - Cola de requests para evitar sobrecarga

5. **Prefetching Inteligente**:
   - Precargar datos basado en patrones de usuario
   - Implementar preload en hover
   - Caché predictivo de siguiente página