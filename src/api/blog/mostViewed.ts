/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useMostViewed = () => {
  const [mostViewed, setMostViewed] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMostViewed = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/blog/most-viewed`);
        setMostViewed(res.data?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch most viewed data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMostViewed();
  }, []);

  return { mostViewed, isLoading, error };
};
