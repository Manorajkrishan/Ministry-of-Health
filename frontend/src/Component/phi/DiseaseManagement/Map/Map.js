import React, { useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const mapStyle = {
    height: '300px',
    width: '100%'
}
const Map = () => {

    const DEFAULT_ZOOM = 5;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "you-api-key"
    })
    const [map, setMap] = React.useState(null)
    const [markerPosition, setMarkerPosition] = useState({
        lat: 28.0289837,
        lng: 1.6666663,
    })
    const [defaultLocation, setDefaultLocation] = useState({
        lat: 28.0289837,
        lng: 1.6666663,
      })
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds({
            lat: 28.0289837,
            lng: 1.6666663,
        });
        map.fitBounds(bounds);
        setMap(map);


    }, [])
    const onUnmount = useCallback(() => {
        setMap(null)

    }, [])
    const handelClickOnMap = () => {

    }
    return (
        <div>
            {
                isLoaded ? (
                    <GoogleMap
                        onLoad={onLoad}
                        center={defaultLocation}
                        zoom={DEFAULT_ZOOM}
                        mapContainerStyle={mapStyle}
                        onClick={handelClickOnMap}
                        onUnmount={onUnmount}
                    >
                        <Marker position={markerPosition} />
                    </GoogleMap>

                ) : <></>
            }

        </div >
    )
}
export default Map