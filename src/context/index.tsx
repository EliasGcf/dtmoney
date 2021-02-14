import { ReactNode } from 'react';
import { TransactionsProvider } from './TransactionsContext';

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  return <TransactionsProvider>{children}</TransactionsProvider>;
}
