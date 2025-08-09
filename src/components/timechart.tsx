
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
interface props {
    data: { activity: string, hours: Number }[]
}
const timechart = ({ data }: props) => {
    const chartData = {
        labels: data.map((item) => item.activity),
        datasets: [
            {
                label: 'Hours',
                data: data.map((item) => item.hours),
                backgroundColor: ['#3b82f6','#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#14b8a6', ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Pie data={chartData}></Pie>
    )
}

export default timechart
