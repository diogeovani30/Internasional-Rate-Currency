// src/CurrencyTable.jsx
import React from 'react';

const CurrencyTable = () => {
  // Sample data for currency rates
  const currencies = [
    { name: 'CAD', buy: '001.743', exchangeRate: '001.7092', sell: '001.670' },
    { name: 'IDR', buy: '18522.3525', exchangeRate: '18159.1691', sell: '17795.9857' },
    { name: 'JPY', buy: '143.4565', exchangeRate: '140.6437', sell: '37.8308' },
    { name: 'CHF', buy: '001.3114', exchangeRate: '01.28557', sell: '0.12600' },
    { name: 'EUR', buy: '001.1937', exchangeRate: '001.1703', sell: '001.1469' },
    { name: 'USD', buy: '001.3114', exchangeRate: '001.28', sell: '001.2626' },
  ];

  return (
    <div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th></th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td>{currency.name}</td>
              <td>{currency.buy}</td>
              <td>{currency.exchangeRate}</td>
              <td>{currency.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
