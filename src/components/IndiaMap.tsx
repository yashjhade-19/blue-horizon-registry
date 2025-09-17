import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize Leaflet map
    map.current = L.map(mapContainer.current).setView([20.5937, 78.9629], 5);

    // Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Custom marker icon (blue)
    const blueIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background-color: #0ea5e9; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    // Add markers for each project location
    const bounds = L.latLngBounds([]);
    
    projectLocations.forEach((location) => {
      const marker = L.marker([location.coordinates[1], location.coordinates[0]], {
        icon: blueIcon
      }).addTo(map.current!);

      // Create popup content
      const popupContent = `
        <div style="padding: 12px; min-width: 200px;">
          <h3 style="font-weight: 600; font-size: 14px; margin-bottom: 8px; color: #1f2937;">${location.name}</h3>
          <p style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">State: ${location.state}</p>
          <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Area: ${location.area} hectares</p>
          <span style="display: inline-block; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 500; ${
            location.status === 'Active' ? 'background-color: #dcfce7; color: #166534;' :
            location.status === 'Completed' ? 'background-color: #dbeafe; color: #1e40af;' :
            'background-color: #fef3c7; color: #92400e;'
          }">
            ${location.status}
          </span>
        </div>
      `;

      marker.bindPopup(popupContent);
      bounds.extend([location.coordinates[1], location.coordinates[0]]);
    });

    // Fit map to show all markers
    if (bounds.isValid()) {
      map.current.fitBounds(bounds, { padding: [20, 20] });
    }

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="relative h-64 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default IndiaMap;