import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface ProjectLocationMapProps {
  coordinates: [number, number];
  projectName: string;
  areaSize: string;
  projectType: string;
}

const ProjectLocationMap = ({ coordinates, projectName, areaSize, projectType }: ProjectLocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on the project location
    const map = L.map(mapRef.current).setView(coordinates, 12);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Custom icon for the project marker
    const projectIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: hsl(var(--primary));
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    // Add project marker
    const marker = L.marker(coordinates, { icon: projectIcon }).addTo(map);

    // Create popup content
    const popupContent = `
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 8px;">
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: hsl(var(--foreground));">
          ${projectName}
        </h3>
        <div style="font-size: 12px; color: hsl(var(--muted-foreground)); line-height: 1.4;">
          <div style="margin-bottom: 4px;">
            <strong>Type:</strong> ${projectType}
          </div>
          <div style="margin-bottom: 4px;">
            <strong>Area:</strong> ${areaSize}
          </div>
          <div>
            <strong>Coordinates:</strong> ${coordinates[0].toFixed(4)}°N, ${coordinates[1].toFixed(4)}°E
          </div>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);

    // Calculate area size for circle radius (approximate visualization)
    const areaSizeValue = parseFloat(areaSize.replace(/[^\d.]/g, ''));
    const radiusInMeters = Math.sqrt(areaSizeValue * 10000 / Math.PI) * 1.5; // Convert hectares to approximate radius

    // Add a circle to represent the project area
    const projectArea = L.circle(coordinates, {
      color: 'hsl(var(--primary))',
      fillColor: 'hsl(var(--primary))',
      fillOpacity: 0.1,
      radius: radiusInMeters,
      weight: 2
    }).addTo(map);

    // Add popup to the circle as well
    projectArea.bindPopup(popupContent);

    // Fit map to show both marker and circle
    const group = new L.FeatureGroup([marker, projectArea]);
    map.fitBounds(group.getBounds().pad(0.2));

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates, projectName, areaSize, projectType]);

  return (
    <div 
      ref={mapRef} 
      style={{ height: '300px', width: '100%', borderRadius: '8px' }}
      className="shadow-sm border border-border"
    />
  );
};

export default ProjectLocationMap;