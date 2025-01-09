import React, { useEffect, useState } from 'react'

const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a30cda87efmsh77e49e9abe99915p1502abjsn48c9c748f1be',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};
const ExchangeRate = () => {

  const [rates, setRate] = useState([])

  useEffect(() => {
    const exchange = async() => {
      try {
        const response = await fetch(url, options);
      
    const result = await response.json();
    setRate([result])
    console.log(result);
    
      } catch (error) {
        console.error(error);    
      }
    }
    exchange()
  },[])
  return (
    <div>
      <h2>Currency Exchange Rates</h2>
      
      <div>
        {rates && rates.map((rate, id) => {
          return(
            <div key={id}>
            <div><b>Date: {rate.date}</b></div>
            <b>Euro(€) as a base currency</b>
            <div><b>1 {rate.base}</b></div>
            <div>USD = {rate.rates.USD}</div>
            <div>CAD = {rate.rates.CAD}</div>
            <div>GBP = {rate.rates.GBP}</div>
            <div>AED = {rate.rates.AED}</div>
            <div>KES = {rate.rates.KES}</div>
            <div>XAF = {rate.rates.XAF}</div>
            <div>XOF = {rate.rates.XOF}</div>
            <div>NGN = {rate.rates.NGN}</div>
            <div>BTC = {rate.rates.BTC}</div>
            </div>
            
          )
        })}
        {/* {Object.keys(rates)} */}
      </div>
    </div>
  )
}

export default ExchangeRate
