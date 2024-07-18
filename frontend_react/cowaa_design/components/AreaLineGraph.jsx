import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  Label,
} from 'recharts';

function AreaLineGraph({data,  xAxisKey }){
  return(
     <>
     <ResponsiveContainer width="100%" height={300}>
       <AreaChart
         width={500}
         height={200}
         data={data}
         syncId="anyId"
         margin={{
           top: 10,
           right: 30,
           left: 10,
           bottom: 10,
         }}
       >
       <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey={xAxisKey}>
       <Label value={xAxisKey === 'month' ? 'Month' : 'date'} offset={-5} position="insideBottom" />
     </XAxis>
     <YAxis >
       <Label value="Count" angle={-90} position="insideLeft" />
     </YAxis>
     <Tooltip cursor={{ strokeDasharray: '1 1' }} contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}/>
     <Area type="monotone" dataKey="count" stroke="#ffc658" fill="blue" />
   </AreaChart>
 </ResponsiveContainer>
     </>
  )  
}
export default AreaLineGraph;