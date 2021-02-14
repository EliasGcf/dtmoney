import { useContext } from 'react';

import { TransactionsContext } from '..';

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
