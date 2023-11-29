import Map, { Marker } from 'react-map-gl';
import Container from '../../../Components/Container/Container';
import { FaLocationArrow } from 'react-icons/fa';


const OurLocation = () => {
    return (
        <div className='flex justify-center mb-10 overflow-hidden'>

            <Container>
                <h2 className='text-3xl font-bold text-center mb-20'>Our Service Area</h2>
                <Map
                    mapLib={import('mapbox-gl')}
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3.5
                    }}
                    style={{ width: 1440, height: 500, overflow:'hidden' }}
                    mapboxAccessToken="pk.eyJ1IjoiYXJpZmtoYW4yMzAiLCJhIjoiY2xwanlvbWRkMDRsczJrb3A5cjU4b3BmcSJ9.VvUKZhn5vO4D4Ptnwx7Gaw"
                    mapStyle="mapbox://styles/mapbox/streets-v9"

                >
                    <Marker longitude={-100} latitude={40} anchor="bottom" >
                        <FaLocationArrow></FaLocationArrow>
                    </Marker>
                </Map>
            </Container>
        </div>
    );
};

export default OurLocation;