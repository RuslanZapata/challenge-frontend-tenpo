import axiosInstance from './axios';
import type { Post } from '../types';

// Función para obtener y generar 2000 posts
export const fetchPosts = async (limit = 2000): Promise<Post[]> => {
  try {
    const response = await axiosInstance.get('/posts');
    let posts = response.data as Post[];
    const originalLength = posts.length;
    
    // Duplica los posts hasta alcanzar el límite deseado
    while (posts.length < limit) {
      const additionalPosts = posts.slice(0, originalLength).map((post) => ({
        ...post,
        id: post.id + posts.length, // Asegura IDs únicos
      }));
      posts = [...posts, ...additionalPosts];
    }
    
    // Devuelve exactamente el número de posts solicitados
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
