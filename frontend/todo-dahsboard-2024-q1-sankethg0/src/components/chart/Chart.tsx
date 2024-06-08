import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { ChartsProps } from '../../types/filetypes';

const Chart: React.FC<ChartsProps> = ({ fetchedData }) => {
  // Calculate counts for each priority level
  const priorityCounts = fetchedData.reduce(
    (acc: { high: number; medium: number; low: number; }, task: { priority: any; }) => {
      switch (task.priority) {
        case 'HIGH':
          acc.high++;
          break;
        case 'MEDIUM':
          acc.medium++;
          break;
        case 'LOW':
          acc.low++;
          break;
        default:
          break;
      }
      return acc;
    },
    { high: 0, medium: 0, low: 0 }
  );

  // Data to be used in the Pie Chart
  const data = [
    { id: 0, value: priorityCounts.high, label: 'HIGH' },
    { id: 1, value: priorityCounts.medium, label: 'MEDIUM' },
    { id: 2, value: priorityCounts.low, label: 'LOW' },
  ];

  return (
    <div>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Chart;
