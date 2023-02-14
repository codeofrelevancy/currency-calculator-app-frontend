'use client';

import React, { ChangeEvent, useEffect, useState, useCallback, useRef } from 'react';

import InputGroup from '@/components/InputGroup';
import { getConversionRates } from '@/lib/currency';
import {
  calculateConversion,
  isXDaysOld,
  relativeTime,
} from '@/lib/utils';
import { Rates } from '@/lib/types';

export default function Calculator() {
  const isMounted = useRef(false);

  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');

  const [baseAmount, setBaseAmount] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({} as Rates);
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState('');

  console.log('DEBUG:', 7);
  console.log('rates:', rates);
  console.log('loading:', loading);

  const [action, setAction] = useState('');

  const onBaseAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBaseAmount(e.target.value);
    setAction('base-to-target');
  }, []);

  const onTargetAmountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTargetAmount(e.target.value);
      setAction('target-to-base');
    },
    [],
  );

  const onBaseCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setBaseCurrency(e.target.value);
      setAction('base-to-target');
    },
    [],
  );

  const onTargetCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setTargetCurrency(e.target.value);
      setAction('target-to-base');
    },
    [],
  );

  useEffect(() => {
    console.log('useEffect', 1);
    
    function fetchRates() {
      console.log('FETCHRATES#####################################################:');
      
      setLoading(true);

      // const data = await getConversionRates();
      // setRates(data?.rates as Rates);
      // setLastUpdateTimestamp(data?.timestamp);
      setRates({} as Rates);
      setLastUpdateTimestamp('');

      setLoading(false);
    }

    console.log('useEffect', 2, isMounted.current);
    
    if (isMounted.current) {
      console.log('calling fetchRates');
      fetchRates();
    }

    isMounted.current = true;

    console.log('useEffect', 3);
  }, []);

  console.log('isMounted.current:', isMounted.current);

  useEffect(() => {
    if (action === 'base-to-target') {
      setTargetAmount(
        calculateConversion(
          baseAmount,
          baseCurrency,
          targetCurrency,
          rates as Rates,
        ),
      );
    } else if (action === 'target-to-base') {
      setBaseAmount(
        calculateConversion(
          targetAmount,
          targetCurrency,
          baseCurrency,
          rates as Rates,
        ),
      );
    }
  }, [targetAmount, baseAmount, baseCurrency, targetCurrency, rates, action]);

  if (loading) {
    return (
      <div className="px-5 pt-7 pb-4 w-full mx-auto animate-pulse">
        <div className="space-y-4">
          <div className="h-10 bg-slate-700 rounded"></div>
          <div className="h-10 bg-slate-700 rounded"></div>
        </div>
        <div className="flex justify-between flex-row space-x-20 mt-4">
            <div className="h-5 bg-slate-700 rounded w-full"></div>
            <div className="h-5 bg-slate-700 rounded w-full"></div>
          </div>
      </div>
    );
  }

  return (
    <div className="px-5 pt-7 pb-4">
      <span
        className={`animate-ping absolute -right-1 -top-1 h-3 w-3 rounded-full ${
          isXDaysOld(lastUpdateTimestamp, 1) ? 'bg-red-600' : 'bg-green-600'
        }`}
      ></span>
      <div className="mb-4">
        <InputGroup
          name="baseAmount"
          selectName="baseCurrency"
          value={baseAmount}
          selectedCurrency={baseCurrency}
          onChange={onBaseAmountChange}
          onSelect={onBaseCurrencyChange}
        />
      </div>

      <div className="mb-4">
        <InputGroup
          name="targetAmount"
          selectName="targetCurrency"
          value={targetAmount}
          selectedCurrency={targetCurrency}
          onChange={onTargetAmountChange}
          onSelect={onTargetCurrencyChange}
        />
      </div>

      {rates && (
        <div className="flex justify-between items-center text-xs text-slate-500">
          <p>
            {`1 ${baseCurrency} equals ${calculateConversion(
              1,
              baseCurrency,
              targetCurrency,
              rates as Rates,
            )} ${targetCurrency}`}
          </p>
          <p>
            Rates last updated:{' '}
            <span className="font-bold">
              {relativeTime(lastUpdateTimestamp)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
