import { ReactNode } from 'react';

interface Transaction {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

export type {
  Transaction,
  TransactionInput,
  TransactionsProviderProps,
  TransactionsContextData,
};
