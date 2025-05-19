import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/services';
import type { Post } from '../types';
import VirtualizedList from '../components/VirtualizedList';

// Muestra la lista del posts
const HomePage: React.FC = () => {
  // Estado para almacenar los posts y el estado de carga
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<'loading' | 'error' | 'success'>('loading');

  // Efecto para cargar los posts al montar el componente
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading('loading');
        const data = await fetchPosts(2000);
        setPosts(data);
        setLoading('success');
      } catch (error) {
        console.error('Error al cargar los posts:', error);
        setLoading('error');
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="h-[calc(100vh-120px)]">
      {/* Encabezado con información de la página */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Publicaciones</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Mostrando {posts.length} elementos de la API JSONPlaceholder
        </p>
      </div>

      {/* Lista virtualizada de posts */}
      <VirtualizedList
        items={posts}
        itemHeight={160}
        windowHeight={window.innerHeight - 250}
        loadingState={loading}
      />
    </div>
  );
};

export default HomePage;