import { ChangeEvent } from 'react';

interface InputGroupProps {
  name: string;
  selectName: string;
  value?: any;
  selectedCurrency?: string;
  error?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface Rates {
  [currencyCode: string]: number;
}

interface ConversionRates {
  rates: Rates;
  timestamp: string;
}

export type { InputGroupProps, ConversionRates, Rates };
