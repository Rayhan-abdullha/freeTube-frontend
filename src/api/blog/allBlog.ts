/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/blog`);
        setBlogs(res.data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch blogs'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, isLoading, error };
};
