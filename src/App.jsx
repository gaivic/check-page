// import React, { useState } from 'react'
import TripPlan from './components/TripPlan'
import Map from './components/Map/Map'


import React, { useState } from 'react';
import SplitPane, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

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
                    <TripPlan />
                </Pane>
                <Pane >
                    <Map />
                </Pane>
            </SplitPane>
        </div>
    );
};

export default App;


