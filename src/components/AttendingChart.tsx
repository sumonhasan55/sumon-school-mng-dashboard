"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
  {
    name: 'Mon',
    present: 55,
    absent: 70,
 
  },
  {
    name: 'Tue',
    present: 35,
    absent: 85,
 
  },
  {
    name: 'Wed',
    present: 60,
    absent: 50,
 
  },
  {
    name: 'Thu',
    present: 80,
    absent: 60,
 
  },
  {
    name: 'Fri',
    present: 80,
    absent: 40,
 
  },
];


const AttendingChart=() =>{
  return (
    <div className=" bg-white rounded-lg p-4 h-full">
        <div className=" flex justify-between items-center">
          <h1>Attendance</h1>
          <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>

        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip  contentStyle={{borderRadius:"10px", borderBlockColor:"lightgray"}}/>
          <Legend 
          align='left'
          verticalAlign='top'
          wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}
          />
          <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#C3EBFA"  legendType='circle'  radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>


    </div>
  )
}

export default AttendingChart