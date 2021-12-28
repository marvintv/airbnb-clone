import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useState} from 'react'
import { getCenter } from 'geolib';

const Map = ({searchResults}) => {
    
    // Transform search results
    const [selectedLocation, setSelectedLocation] = useState({})
    const coordinates = searchResults.map((result) => ({
        latitude: result.lat,
        longitude: result.long,
    }))
    
    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
        });

        console.log(selectedLocation)
    return (
        <ReactMapGL
        mapStyle='mapbox://styles/marvintv/ckxpne5ij0nxp14l8pkeu3f9x'
        mapboxApiAccessToken= {process.env.mapbox_key}
        {...viewport} 
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        {searchResults.map((marker) => (
            <div key={marker.long}>
                <Marker
                    longitude={marker.long}
                    latitude={marker.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p 
                        role='img'
                        aria-label='push-pin'
                    onClick={()=>setSelectedLocation(marker)}  className="cursor-pointer text-2xl animate-bounce ">📌</p>
                </Marker>

                {/* Popup if clicked on a marker */}

                {selectedLocation.long === marker.long ? (
                    <Popup 
                    onClose={() => setSelectedLocation({})}
                    closeOnClick={true}
                    latitude={marker.lat}
                    longitude={marker.long}
                        >
                        {marker.title}
                    </Popup>
                ) : (false)}
            </div>
        ))}


        </ReactMapGL>
    )
}

export default Map
