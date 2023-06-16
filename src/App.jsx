// import React, { useState } from 'react'
import TripPlan from './components/TripPlan'
import Map from './components/Map/Map'


import React, { useState } from 'react';
import SplitPane, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Button } from '@material-tailwind/react';

function style(color) {
    return {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color
    };
}


function App() {
    const [sizes, setSizes] = useState(['43%', '57%']);
    const [active, setActive] = useState(1); // Initialize with a default value

    // schedule dynamically change
    const [schedule, setSchedule] = useState([
        [
            { placeId: "ChIJUZ-WfXKpQjQR0j4ggToD89A" },
            { placeId: "ChIJxccAAQ2pQjQRgGoVa3_yuI4" }
        ],
        [
            { placeId: "ChIJWfZUVq6pQjQR3Z-1OU8ILgo" },
            { placeId: "ChIJnzZlOoCpQjQRH-WG9egh-2E" },
            { placeId: "ChIJDRFd54KrQjQRMVgkMiJTbMM" }
        ],
        [
            { placeId: "ChIJP7Zo9S6nQjQRK2KoXGG9_w8" },
            { placeId: "ChIJZdTFIrmfQjQRJ1tSbSwM_Go" }
        ],
        [
            { placeId: "ChIJWfZUVq6pQjQR3Z-1OU8ILgo" },
            { placeId: "ChIJnzZlOoCpQjQRH-WG9egh-2E" },
            { placeId: "ChIJDRFd54KrQjQRMVgkMiJTbMM" }
        ],
        [
            { placeId: "ChIJWfZUVq6pQjQR3Z-1OU8ILgo" },
            { placeId: "ChIJZdTFIrmfQjQRJ1tSbSwM_Go" },
            { placeId: "ChIJUZ-WfXKpQjQR0j4ggToD89A" }
        ]
    ]);

    const handleDayClick = (day) => {
        setActive(day);
    };

    const addDay = () => {
        const newDay = [{ placeId: "ChIJUZ-WfXKpQjQR0j4ggToD89A" },
        { placeId: "ChIJxccAAQ2pQjQRgGoVa3_yuI4" }];
        setSchedule([...schedule, newDay]);
    };
      
      

    return (
        <div style={{ height: '100vh' }}>
            <SplitPane
                sizes={sizes}
                onChange={setSizes}
                resizerSize={4}
                sashRender={() => (
                    <SashContent style={{ backgroundColor: "rgba(143,143,143)" }} />
                )}
            >
                <Pane minSize='35%' maxSize='54%'>
                    <TripPlan active={active} onDayClick={handleDayClick} schedule={schedule} />
                    <div class="flex flex-col justify-center items-center">
                        <Button classname="addDay" onClick={addDay}>+ Add day</Button>
                    </div>
                </Pane>
                <Pane>
                    <Map active={active} schedule={schedule}/>
                </Pane>
            </SplitPane>
        </div>
    );
}

export default App;


