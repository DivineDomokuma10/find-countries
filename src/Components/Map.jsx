import React from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaTimes } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ mapVisibility, setVisibility, data }) => {
  return (
    <>
      {mapVisibility && (
        <main className="w-full h-[95vh] left-0 top-0 fixed bg-gray-500">
          <div className="w-fit h-10 fixed top-20 right-3 flex md:top-20 z-50">
            <FaTimes
              onClick={setVisibility}
              className="text-xl w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-gray-400"
            />
          </div>
          <div className="map" id="map">
            <MapContainer center={data?.capitalInfo.latlng} zoom={6} scrollWheelZoom={true}>
              <TileLayer
                attribution={`&copy; <a href="${data.maps.openStreetMaps}">OpenStreetMap</a> contributors`}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={data?.capitalInfo.latlng}>
                <Popup>???</Popup>
              </Marker>
            </MapContainer>
            <div />
          </div>
        </main>
      )}
    </>
  );
};

export default Map;
