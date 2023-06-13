import React from 'react'
import TripInfo from './TripInfo'
import DayList from './DayList/DayList'


const TripPlan = () => {
    return (
        <div>
            <TripInfo/>
            <div className='p-4'>
                <DayList />
            </div>
        </div>
    )
}

export default TripPlan