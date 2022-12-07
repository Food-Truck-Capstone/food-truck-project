import Map from "react-map-gl";
import React from "react";
import {Pin} from "./Pin.jsx";

export function TruckMap () {

    const [points] = React.useState([ { lat: 35.155, lng: -106.565 },
         { lat: 35.150, lng: -106.568 },
         { lat: 35.118, lng: -106.545 },
         { lat: 35.090, lng: -106.510 }
    ]);
    return (
        <>
            <Map
                initialViewState={{
                    latitude: 35.15, longitude: -106.65, zoom: 10
                }}
                style={{width: '100%', height: '90vh'}}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
            >
                {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index}
                                                   key={index}/>)}
            </Map>
        </>
    )
}