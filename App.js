import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function App() {
  const [data, setData] = useState(null);
  const [coin, setCoin] = useState('BTC');
  const [timeFrame, setTimeFrame] = useState(1);

  useEffect(() => {
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=${timeFrame}`)
    .then(res => res.json())
      .then(resData => {
        setData(resData);
      })
      .catch(error => console.log(error));
  }, [coin, timeFrame]);
 
  const handleCoinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleTimeFrameChange = (event) => {
  setTimeFrame(event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <form>
          <label style={{ marginRight: '2rem' }}>
            Coin:
            <select value={coin} onChange={handleCoinChange}>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="EGLD">EGLD</option>
              <option value="ADA">ADA</option>
              <option value="SOL">SOL</option>
              <option value="DOGE">DOGE</option>
            </select>
          </label>
          <label>
            Time Frame:
            <select value={timeFrame} onChange={handleTimeFrameChange}>
              <option value="1">1 Day</option>
              <option value="7">1 Week</option>
              <option value="30">1 Month</option>
              <option value="360">1 Year</option>
            </select>
          </label>
        </form>
      </div>
      <br />
      <Chart data={data} />
    </div>
  );
}
export default App;
