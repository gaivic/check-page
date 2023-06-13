import React, { useState, useRef } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from '@react-google-maps/api';
import SearchBox from '../SearchBox';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';





const mapContainerStyle = {
    // width: '100%',
    height: '100vh'
};

// const center = {
//     lat: 25.012622,
//     lng: 121.544055

// };


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyADT-3r180WBMfOUuy2vVl-0lfmRPhFhOQ",
        libraries: ["places"],

    });

    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();
    const autocompleteRef = useRef(null);
    const [address, setAddress] = useState('');


    const markers = [
        {
            address: "Address1",
            lat: 25.012622,
            lng: 121.544055
        },
        {
            address: "Address2",
            lat: 26.112622,
            lng: 122.644055
        },
        {
            address: "Address3",
            lat: 25.212622,
            lng: 121.744055
        },
    ];

    const onMapLoad = (map) => {
        setMapRef(map);
        const bounds = new window.google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);
    };

    const handleMarkerClick = (id, lat, lng, address) => {
        mapRef?.setZoom(15);
        mapRef?.panTo({ lat, lng });
        setInfoWindowData({ id, address });
        setIsOpen(true);
    };

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log('Selected Address:', value);
        console.log('Coordinates:', latLng);
    };


    return (
        <div >
            {!isLoaded ? (
                <div className='container pt-5'><h2 className='text-center'>Loading...</h2></div>
            ) : (
                <>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        onLoad={onMapLoad}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* <SearchBox/> */}
                        {markers.map(({ address, lat, lng }, ind) => (

                            <MarkerF
                                key={ind}
                                position={{ lat, lng }}
                                onClick={() => {
                                    handleMarkerClick(ind, lat, lng, address);
                                }}
                            >
                                {isOpen && infoWindowData?.id === ind && (
                                    <InfoWindowF
                                        onCloseClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        <h3>{infoWindowData.address}</h3>
                                    </InfoWindowF>
                                )}
                            </MarkerF>
                        ))}
                    </GoogleMap>
                </>
            )}
        </div>
    );
};

export default Map;


// const Map = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyADT-3r180WBMfOUuy2vVl-0lfmRPhFhOQ"
//     });
//     const onLoad = infoWindow => {
//         console.log('infoWindow: ', infoWindow)
//     }



//     return (
//         <div>
//             {!isLoaded ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <GoogleMap
//                     id="InfoWindow-example"
//                     mapContainerStyle={mapContainerStyle}
//                     zoom={13}
//                     center={center}
//                 >

//                     {/* <InfoWindow
//                             onLoad={onLoad}
//                             position={position}
//                         >
//                             <div style={divStyle}>
//                                 <h1>InfoWindow</h1>
//                             </div>
//                         </InfoWindow> */}
//                     <MarkerF position={position} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
//                 </GoogleMap>
//             )}
//         </div>
//     );
// };

// export default Map;


// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


// const containerStyle = {
//     width: '100%',
//     height: '100vh'
// };

// const Map = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyADT-3r180WBMfOUuy2vVl-0lfmRPhFhOQ",
//     });
//     const markers = [
//         { lat: 18.5204, lng: 73.8567 },
//         { lat: 18.5314, lng: 73.8446 },
//         { lat: 18.5642, lng: 73.7769 },
//     ];

//     const onLoad = (map) => {
//         const bounds = new window.google.maps.LatLngBounds();
//         markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//         map.fitBounds(bounds);
//     };

//     return (
//         <div >
//             {!isLoaded ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad}>
//                     {markers.map(({ lat, lng }) => (
//                         <Marker position={{ lat, lng }} />
//                     ))}
//                 </GoogleMap>
//             )}
//         </div>
//     );
// };

// export default Map;