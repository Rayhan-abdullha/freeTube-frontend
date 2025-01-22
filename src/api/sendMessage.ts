/* eslint-disable @typescript-eslint/no-explicit-any */
import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState } from 'react';

interface SendMessagePayload {
  name: string;
  email: string;
  message: string; // Minimum 5 characters
}

export const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (payload: SendMessagePayload): Promise<any> => {
    if (payload.message.length < 5) {
      setError('Message must be at least 5 characters long');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        `${BACKEND_BASE_URL}/cms-contact-page/send-message`,
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
      setError(err.response?.data?.message || err.message || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, response, error };
};
