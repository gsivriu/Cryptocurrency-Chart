import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  let chartLabels = [];
  let chartData = [];
  if (data && data.Data && data.Data.Data) {
    chartLabels = data.Data.Data.map((item) => new Date(item.time * 1000).toLocaleDateString("en-GB"));
    chartData = data.Data.Data.map((item) => item.close);
  }
  const chartConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Price',
        data: chartData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  return (
    <div>
      <Line data={chartConfig} width = {400}
      />
    </div>
  );
};
export default Chart;
