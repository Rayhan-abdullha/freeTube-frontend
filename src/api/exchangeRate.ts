import { BACKEND_BASE_URL } from '@/config';
import axios from 'axios';
import { useState, useEffect } from 'react'; 

export const useExchangeRate = (
  fromCurrencyId: string,
  toCurrencyId: string,
  amount: number
) => {
  const [exchangeAmount, setExchangeAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (!fromCurrencyId || !toCurrencyId) return;

      try {
        setIsLoading(true); 

        const res = await axios.get(
            `${BACKEND_BASE_URL}/currency/exchange-rate?fromCurrency=${fromCurrencyId}&toCurrency=${toCurrencyId}&amount=${amount}`
        );
        setExchangeAmount(res.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch exchange rate'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrencyId, toCurrencyId, amount]);

  return { exchangeAmount, isLoading, error };
};