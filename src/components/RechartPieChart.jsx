import React, { Component } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

class RechartPieChart extends Component {
  render() {
    const dataGendar = [
      { name: '男性', value: 2 },
      { name: '女性', value: 2 },
    ];

    const COLORS = [
      '#2250A2',
      '#da50a2',
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    return (
      <div id="gender">
          <PieChart
            width={800}
            height={400}
            onMouseEnter={this.onPieEnter}
          >
            <Pie
              data={dataGendar}
              nameKey="name"
              dataKey="value"
              cx={300}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {
              dataGendar.map((entry, index) =>
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              )
              }
            </Pie>
            <Tooltip
              payload={[{ name: '男性', value: 0 }, { name: '女性', value: 0 }]}
              viewBox={{ x: 1000, y: 0, width: 4000, height: 400 }}
            />
          </PieChart>
      </div>
    );
  }
}

export default RechartPieChart;
