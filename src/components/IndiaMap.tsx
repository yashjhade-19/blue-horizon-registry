import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProjectLocation {
  id: string;
  name: string;
  coordinates: [number, number];
  area: number;
  status: string;
  state: string;
}

const projectLocations: ProjectLocation[] = [
  {
    id: '1',
    name: 'Kerala Mangrove Conservation',
    coordinates: [76.2711, 9.9312],
    area: 1250,
    status: 'Active',
    state: 'Kerala'
  },
  {
    id: '2',
    name: 'Tamil Nadu Coastal Protection',
    coordinates: [78.6569, 11.4102],
    area: 890,
    status: 'Verification Pending',
    state: 'Tamil Nadu'
  },
  {
    id: '3',
    name: 'Gujarat Blue Carbon Initiative',
    coordinates: [70.0577, 22.2587],
    area: 2100,
    status: 'Active',
    state: 'Gujarat'
  },
  {
    id: '4',
    name: 'Maharashtra Wetland Restoration',
    coordinates: [75.7139, 19.7515],
    area: 1750,
    status: 'Completed',
    state: 'Maharashtra'
  }
];

const IndiaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4.5
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each project location
    projectLocations.forEach((location) => {
      // Create a marker
      const marker = new mapboxgl.Marker({
        color: '#0ea5e9'
      })
        .setLngLat(location.coordinates)
        .addTo(map.current!);

      // Create popup content
      const popupContent = `
        <div class="p-3">
          <h3 class="font-semibold text-sm mb-2">${location.name}</h3>
          <p class="text-xs text-muted-foreground mb-1">State: ${location.state}</p>
          <p class="text-xs text-muted-foreground mb-1">Area: ${location.area} hectares</p>
          <p class="text-xs">
            <span class="inline-block px-2 py-1 rounded-full text-xs font-medium ${
              location.status === 'Active' ? 'bg-green-100 text-green-800' :
              location.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }">
              ${location.status}
            </span>
          </p>
        </div>
      `;

      // Create and attach popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(popupContent);

      marker.setPopup(popup);
    });

    // Fit map to show all markers
    const bounds = new mapboxgl.LngLatBounds();
    projectLocations.forEach(location => bounds.extend(location.coordinates));
    map.current.fitBounds(bounds, { padding: 50 });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h3 className="font-semibold mb-2">Mapbox Token Required</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Please enter your Mapbox public token to display the interactive map.
            Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="space-y-3">
            <Input
              placeholder="pk.eyJ1IjoieW91cm..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="text-sm"
            />
            <Button onClick={handleTokenSubmit} size="sm" className="w-full">
              Load Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default IndiaMap;