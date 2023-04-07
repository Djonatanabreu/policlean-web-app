import { ReactNode } from 'react';

export interface INavbuttonProps {
  onClick?(): void;
  children: ReactNode;
}
