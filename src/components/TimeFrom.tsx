import  { useState } from 'react';
import { Input } from './ui/input'
import { Button } from './ui/button'


interface props{
    onadd:(activity: string, hours: number) =>void

}
const TimeFrom = ({onadd}:props) => {
    const [activity, setActivity] = useState('');
    const [hours, setHours] = useState('');
    const handleclick=()=>{
        if(!activity.trim()||!hours) alert("plese fill the form ");
        setActivity("");
        setHours("");
        onadd(activity,Number(hours));

    }
    return (
        <div className="flex flex-col space-y-4 mt-6">
            
            <Input
            placeholder='Activity'
            value={activity}
            onChange={(e) => setActivity(e.target.value)}/>
            <Input
            placeholder='Hours'
            type='number'
            value={hours}
            onChange={(e) => setHours(e.target.value)}/>
            <Button className='w-full' onClick={handleclick}>Add Activity</Button>

        </div>
    )
}

export default TimeFrom
