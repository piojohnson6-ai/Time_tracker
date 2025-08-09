import  { useState } from 'react';
import TimeFrom from '@/components/TimeFrom';
import Timechart from '@/components/timechart';


const Home = () => {
    const [data, setData] = useState<{ activity: string; hours: number }[]>([]);
    const handleAdd = (activity: string, hours: number) => {
        setData((prev) => [...prev, { activity, hours }]);

};
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Time Tracker</h1>
        <TimeFrom onadd={handleAdd}/>
        <Timechart data={data}></Timechart>
      </div>
    </div>
  );
};

export default Home;
