import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function National() {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.carbonintensity.org.uk/generation');
                const generationMix = await response.json();
                const data = generationMix.data.generationmix.map(entry => entry.perc);
                const labels = generationMix.data.generationmix.map(entry => entry.fuel);
                const backgroundColors = getFuelColors();

                const ctx = document.getElementById('myChart').getContext('2d');
                Chart.defaults.font.size = 10;
                new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: backgroundColors
                        }]
                    },
                });
            } catch (error) {
                console.error('Error setting up chart:', error);
            }
        }

        fetchData();

    }, []);

    function getFuelColors() {
        return [
            'rgba(100, 255, 100, 0.5)',
            'rgba(100, 100, 255, 0.5)',
            'rgba(255, 255, 100, 0.5)',
            'rgba(255, 100, 100, 0.5)',
            'rgba(255, 100, 255, 0.5)',
            'rgba(100, 100, 100, 0.5)',
            'rgba(100, 200, 255, 0.5)',
            'rgba(255, 200, 100, 0.5)',
            'rgba(255, 150, 50, 0.5)'
        ];
    }

    return (
        <div>
            <h1 style={{ fontSize: '30px' }}>Great Britain</h1>
            <canvas id="myChart" width="350" height="350"></canvas>
        </div>
    );
}