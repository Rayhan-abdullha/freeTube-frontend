/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState } from 'react';

interface AskQuestionPayload {
  email: string;
  question: string; // Minimum 5 characters
}

export const useAskQuestion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const askQuestion = async (payload: AskQuestionPayload): Promise<any> => {
    if (payload.question.length < 5) {
      setError('Question must be at least 5 characters long');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `${BACKEND_BASE_URL}/cms/asq-question`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(res.data);
      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to ask question');
    } finally {
      setIsLoading(false);
    }
  };

  return { askQuestion, isLoading, response, error };
};
