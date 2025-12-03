export type Status = 'active' | 'inactive';

export interface User {
  userId: string;
  name: string;
  level: number;
  diamonds: string;
  beans: string;
  coinSell: string;
  coinBuy: string;
  location: string;
  status: Status;
}

export interface Column<T> {
  key: keyof T | 'action';
  title: string;
  render?: (item: T) => React.ReactNode;
  cellClasses?: string;
}