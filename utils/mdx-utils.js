import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    console.log('Posts fetched successfully:', data);
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  //TODO: BUSCAR UM POST EM ESPECIFICO.
  const { data } = await api.get(`/posts?id=eq.${id}`);
  if (data && data.length > 0) {
    console.log('Post fetched successfully:', data[0]);
    return data[0];
  }
  return {};
};
