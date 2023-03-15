import { GoogleMap } from '@capacitor/google-maps';
import { useRef, useEffect } from 'react';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey:  process.env.REACT_APP_GOOGLE_MAPS || '',
      config: {
        center: {
          lat: 18.4572842,
          lng: -66.0734274
        },
        zoom: 14,
        draggable: false
      }
    });
  }

  useEffect(() => {
    createMap();
  }, []);

  return (
    <div className="map">
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 350,
        height: 300
      }}></capacitor-google-map>
    </div>
  )
}

export default Map;
