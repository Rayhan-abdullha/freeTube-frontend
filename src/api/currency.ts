/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useCurrency = () => {
  const [currency, setCurrency] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_BASE_URL}/currency?sort=createdAt:asc&limit=20`
      );
      setCurrency(res.data?.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch currencies'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return { currency, isLoading, error };
};
 