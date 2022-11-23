import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import Map from "react-map-gl";
import {Pin} from "./Pin.jsx";

import {MenuItem} from "./MenuItem.jsx";


export function Home() {
    const [points] = React.useState([// { lat: 35.332, lng: -106.652 },
        // { lat: 35.339, lng: -106.656 },
        // { lat: 35.40, lng: -106.666 },
        // { lat: 35.23, lng: -106.4444 }
    ])
    return (<>

            <Container fluid>
                <Row className={"justify-content-start"}>
                    <Col lg={8}>
                        <h1>Map</h1>
                        <Map
                            initialViewState={{
                                latitude: 35.15, longitude: -106.65, zoom: 10
                            }}
                            style={{width: '100%', height: '80vh'}}
                            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                        >
                            {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index}
                                                               key={index}/>)}
                        </Map>
                    </Col>
                    <Col lg={4}>
                        <MenuItem/>
                    </Col>
                </Row>
            </Container>
        </>)
}