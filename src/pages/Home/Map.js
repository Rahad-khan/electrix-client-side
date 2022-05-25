import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
    const position = [24.84731780267392, 89.37368994626706];
    return (
        <div className="my-10 px-4 lg:px-0" id="location">
            <div className='h-1/2'>
                <h1 className="text-2xl text-center font-semibold mb-10 md:text-4xl">
                    <span className="border-b-[2px] border-orange-700">Our Location</span>
                </h1>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-[600px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;