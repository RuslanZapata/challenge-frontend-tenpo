import { useState, useCallback, useEffect } from 'react';
import type { Post } from '../types';

interface VirtualizedListProps {
  items: Post[];
  itemHeight: number;
  windowHeight: number;
  loadingState: 'loading' | 'error' | 'success';
}

// Componente que implementa una lista
const VirtualizedList: React.FC<VirtualizedListProps> = ({
  items,
  itemHeight,
  windowHeight,
  loadingState
}) => {
  // Controlar la posición del scroll
  const [scrollTop, setScrollTop] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Actualiza el estado de móvil cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Configuración de la cuadrícula
  const itemsPerRow = isMobile ? 2 : 3;
  const gap = 16;
  const rowHeight = itemHeight + gap;

  // Calcula los índices de las filas visibles
  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - 3);
  const endRow = Math.min(
    Math.ceil(items.length / itemsPerRow),
    Math.ceil((scrollTop + windowHeight) / rowHeight) + 3
  );
  
  // Calcula los índices de los elementos
  const startIndex = startRow * itemsPerRow;
  const endIndex = Math.min(items.length, (endRow + 1) * itemsPerRow);
  
  // Obtiene los elementos visibles
  const visibleItems = items.slice(startIndex, endIndex);
  
    // Manejador optimizado del evento de scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);
  
   // Renderiza el estado de carga con skeleton loading
  if (loadingState === 'loading') {
    return (
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 p-4">
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-[160px] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        ))}
      </div>
    );
  }
  
  // Renderizado del estado de error
  if (loadingState === 'error') {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200">Error al cargar los datos</h3>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            Hubo un error al cargar los elementos. Por favor, intenta de nuevo.
          </p>
        </div>
      </div>
    );
  }

  // Calcula la altura total del contenedor
  const totalRows = Math.ceil(items.length / itemsPerRow);
  const totalHeight = totalRows * rowHeight;

  return (
    <div
      onScroll={handleScroll}
      className="overflow-auto h-full w-full relative px-4"
      style={{ height: windowHeight }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div 
          className="grid md:grid-cols-3 grid-cols-2 gap-4 absolute w-full"
          style={{ 
            transform: `translateY(${startRow * rowHeight}px)`,
          }}
        >
          {/* Renderizado de los items visibles */}
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white text-lg mb-2 truncate">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {item.body}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Usuario ID: {item.userId}
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-full">
                  #{item.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;