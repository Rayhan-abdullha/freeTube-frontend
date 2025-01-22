/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useSingleBlog = (blogId: string) => {
  const [blog, setBlog] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!blogId) {
      setError(new Error('No Blog ID provided'));
      setIsLoading(false);
      return;
    }

    const fetchSingleBlog = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/blog/${blogId}`);
        setBlog(res.data?.data || null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch single blog'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleBlog();
  }, [blogId]);

  return { blog, isLoading, error };
};
