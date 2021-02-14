import { createContext, useEffect, useState } from 'react';

import { api } from '../../services/api';

import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
  TransactionsProviderProps,
} from './types';

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', transactionInput);
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export { TransactionsContext, TransactionsProvider };
