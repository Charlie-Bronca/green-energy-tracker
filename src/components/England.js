import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

function England() {
  const [altState, setAltState] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.carbonintensity.org.uk/regional/england');
      const data = await response.json();
      createChart(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createChart = (data) => {
    const ctx = document.getElementById('englandChart').getContext('2d');
    const generationMix = data.data[0].data[0].generationmix;
    const fuelData = generationMix.map((fuel) => fuel.perc);
    const labels = generationMix.map((fuel) => fuel.fuel);
    const backgroundColors = getFuelColors();

    const altText = labels.map((label, index) => `${label}: ${fuelData[index]}%, `).join('');
    setAltState(altText);

    Chart.defaults.font.size = 10;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: fuelData,
          backgroundColor: backgroundColors,
        }],
      },
    });
  };

  const getFuelColors = () => [
    'rgba(100, 255, 100, 0.5)',
    'rgba(100, 100, 255, 0.5)',
    'rgba(255, 255, 100, 0.5)',
    'rgba(255, 100, 100, 0.5)',
    'rgba(255, 100, 255, 0.5)',
    'rgba(100, 100, 100, 0.5)',
    'rgba(100, 200, 255, 0.5)',
    'rgba(255, 200, 100, 0.5)',
    'rgba(255, 150, 50, 0.5)',
  ];

  return (
    <div>
      <h1 style={{ fontSize: '20px' }}>England</h1>
      <canvas id="englandChart" width="250" height="250" alt={altState}></canvas>
    </div>
  );
}

export default England;
