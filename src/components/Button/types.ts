import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick(): void;
  onLoad(): void;
  largeButton?: boolean;
}
