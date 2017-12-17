import React, { Component } from 'react';
import {
  ComposedChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

class RechartGraphRadar extends Component {
  render () {
    const data_graph = [
      {name: '1月', '売上': 0, '総売上': 0},
      {name: '2月', '売上': 0, '総売上': 0},
      {name: '3月', '売上': 0, '総売上': 0},
      {name: '4月', '売上': 0, '総売上': 0},
      {name: '5月', '売上': 0, '総売上': 0},
      {name: '6月', '売上': 0, '総売上': 0}];
    const data_radar = [
    { subject: '国語', A: 0},
    { subject: '数学', A: 0},
    { subject: '理科', A: 0},
    { subject: '社会', A: 0},
    { subject: '英語', A: 0}];
    const data_event = [
          { name: '国語', "点数": 0 },
          { name: '数学', "点数": 0 },
          { name: '理科', "点数": 0 },
          { name: '社会', "点数": 0 },
          { name: '英語', "点数": 0 },
        ]
    return (
      <div id='research'>
        <div id='graph'>
          <ComposedChart
            width={600}
            height={400}
            data={data_graph}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}
          >
            <XAxis
              dataKey="name"
            />
            <YAxis
              domain={[0, 'dataMax + 3']}
               />
            <Tooltip />
            <Legend />
            <CartesianGrid
              stroke='#f5f5f5'
            />
            <Area
              dataKey='総売上'
            />
            <Bar
              dataKey='売上'
              barSize={20}
              fill='#413ea0'
            />
          </ComposedChart>
        </div>
      <div id='radar'>
        <RadarChart
          cx={250}
          cy={250}
          outerRadius={120}
          width={500}
          height={400}
          data={data_radar}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </div>
      <div id="event-join" style={{width: 1000, height: 280}}>
       <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            height={280}
            data={data_event}
            margin={{ top: 20, right: 0, bottom: 20, left: 200 }}
          >
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category"dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="点数" barSize={20} fill="#413ea0" />
          </ComposedChart>
          </ResponsiveContainer>
    </div>
    </div>
    )
  }
}

export default RechartGraphRadar;
