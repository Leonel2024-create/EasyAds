import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Impresiones',
        data: [12000, 19000, 30000, 50000, 20000, 30000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Estadísticas de la Campaña</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
