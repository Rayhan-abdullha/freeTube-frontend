/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFaq = () => {
  const [content, setContent] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_BASE_URL}/cms/faq`
        );
        setContent(res.data?.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { content, isLoading, error };
};
