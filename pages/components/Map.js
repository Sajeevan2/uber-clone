import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from "react";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FqZWV2YW4yIiwiYSI6ImNrcGt3YTJyZjA1ZXAycG8xMDU1OTh6cWsifQ.qAO8uF_uBnpVo96P_krxdA';

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [79.9925, 9.7291],
            zoom: 12
        });
        if(props.pickupCoordinates && props.pickupCoordinates.length > 0){
            addToMap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates && props.dropoffCoordinates.length > 0){
            addToMap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates && props.pickupCoordinates.length > 0 && props.dropoffCoordinates.length > 0){
            map.fitBounds([
                props.dropoffCoordinates,props.pickupCoordinates
            ],{padding: 50})
        }
       
    },[props.pickupCoordinates,props.dropoffCoordinates]);

    const addToMap =(map,coordinates)=>{
     const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`
