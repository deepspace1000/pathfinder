import { Button, Card, Input, styled } from '@mui/joy';
import axios from 'axios';
import { useEffect, useState } from 'react';

type CurrencyResponse = {
  rates: Record<string, number>;
};

export function CurrencyExchange() {
  const [firstExchange, setFirstExchange] = useState('');
  const [secondExchange, setSecondExchange] = useState('');
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [currencyResult1, setCurrencyResult1] = useState(0);
  const [currencyResult2, setCurrencyResult2] = useState(0);
  const [convertingCurrency, setConvertingCurrency] = useState<CurrencyResponse | null>(null);
  const [exchangeName, setExchangeName] = useState('');

  useEffect(() => {
    if (convertingCurrency) {
      let result = 0;
      let currenyRates = convertingCurrency.rates;
      if (currenyRates) {
        console.log(currenyRates);
        if (exchangeName == 'normal') {
          result = currencyAmount * currenyRates[secondExchange];
          let formattedResult = result.toFixed(2);
          setCurrencyResult2(formattedResult);
          setCurrencyResult1(currencyAmount);
        } else if (exchangeName == 'reverse') {
          result = currencyAmount * currenyRates[firstExchange];
          let formattedResult = result.toFixed(2);
          setCurrencyResult2(currencyAmount);
          setCurrencyResult1(formattedResult);
        }
      }
    }
  }, [convertingCurrency]);

  const getCurrencyData = async (name: string) => {
    try {
      let currencyName;
      if (name == 'normal') {
        currencyName = firstExchange;
      } else {
        currencyName = secondExchange;
      }
      const response = await axios.get(`https://open.er-api.com/v6/latest/${currencyName}`);
      setConvertingCurrency(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleButtonClick = (name: string) => {
    setExchangeName(name);
    getCurrencyData(name);
  };

  return (
    <CurrencyExchangeCard>
      <CardHeader>Currency Exchange Rate</CardHeader>
      <SeconedHeaderGrid>
        <SecondCardHeader>Select your currency</SecondCardHeader>
        <SecondCardHeader>Select amount</SecondCardHeader>
        <SecondCardHeader>Select your 2. currency</SecondCardHeader>
      </SeconedHeaderGrid>
      <InputGrid>
        <CurrencyInput
          value={firstExchange}
          onChange={(e) => setFirstExchange(e.target.value)}
          placeholder="CHF"></CurrencyInput>
        <CurrencyInput
          value={currencyAmount}
          onChange={(e) => setCurrencyAmount(e.target.value)}
          placeholder="1000"></CurrencyInput>
        <CurrencyInput
          value={secondExchange}
          onChange={(e) => setSecondExchange(e.target.value)}
          placeholder="USD"></CurrencyInput>
      </InputGrid>
      <CurrencyExchangeDisplay>
        <div style={{ display: 'flex' }}>
          {currencyResult1}
          {` `}
          {firstExchange} - - - {currencyResult2}
          {` `}
          {secondExchange}
        </div>
      </CurrencyExchangeDisplay>
      <ExchangeButtonGrid>
        <ExchangeButton type={'submit'} onClick={() => handleButtonClick('normal')}>
          exchange
        </ExchangeButton>
        <ExchangeButton type={'submit'} onClick={() => handleButtonClick('reverse')}>
          reverse exchange
        </ExchangeButton>
      </ExchangeButtonGrid>
    </CurrencyExchangeCard>
  );
}

const CurrencyExchangeCard = styled(Card)`
  background: #76bdd6;
  width: 500px;
  height: 385px;
  margin-left: 20px;
  border: 0;
`;

const SecondCardHeader = styled(Card)`
  height: 90px;
  border: 0;
  font-family: 'Syne', 'sans-serif';
  background-color: #053c51;
  font-size: 20px;
  color: white;
  text-align: center;
`;

const SeconedHeaderGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
`;

const CurrencyInput = styled(Input)`
  border: 1px solid #053c51;
  height: 50px;
`;

const InputGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
`;

const ExchangeButton = styled(Button)`
  background-color: #095977;
  border: 1px solid #053c51;
  border-radius: 20px;
  height: 40px;
  color: white;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #0090c1;
    border: 1px solid #095977;
  }
`;

const ExchangeButtonGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
`;

const CurrencyExchangeDisplay = styled(Card)`
  height: 50px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

const CardHeader = styled(Card)`
  height: 75px;
  border: 0;
  font-family: 'Syne', 'sans-serif';
  background-color: #053c51;
  font-size: 30px;
  color: white;
  align-items: center;
  justify-content: center;
`;
