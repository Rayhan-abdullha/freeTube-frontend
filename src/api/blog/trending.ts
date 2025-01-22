
/* eslint-disable @typescript-eslint/no-explicit-any */
 import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useTrending = () => {
  const [trending, setTrending] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/blog/trending`);
        setTrending(res.data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch trending data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { trending, isLoading, error };
};
