import React, { useEffect, useState } from 'react';
import { SectionTitle, Reveal, Card, Button, useSEO } from './UIComponents';
import { LOCATIONS, BRAND } from '../constants';
import { MapPin, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import * as L from 'leaflet';

// Fix for default Leaflet markers
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationsProps {
  onBack: () => void;
  onNavigate?: (view: string) => void;
}

export const Locations: React.FC<LocationsProps> = ({ onBack, onNavigate }) => {
  const [postcode, setPostcode] = useState('');
  const [checkResult, setCheckResult] = useState<null | string>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO(
    "Solar Panel Installation Areas",
    "We install Solar PV and Batteries across Berkshire, Hampshire, and Oxfordshire. Check if we cover your area.",
    undefined
  );

  // Center Point: 63 Bath Rd, Thatcham RG18 3BD
  const centerPosition: [number, number] = [51.4062, -1.2656];
  const radiusMeters = 32186; // Approx 20 miles

  // Group by county
  const groupedLocations = LOCATIONS.reduce((acc, loc) => {
    if (!acc[loc.county]) acc[loc.county] = [];
    acc[loc.county].push(loc);
    return acc;
  }, {} as Record<string, typeof LOCATIONS>);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation logic for visual feedback
    if (postcode.length > 2) {
      setCheckResult("Great news! It looks like we cover your area.");
    } else {
      setCheckResult(null);
    }
  };

  const handleLocationClick = (slug: string) => {
    if (onNavigate) {
      onNavigate(slug);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
       <div className="container mx-auto px-6">
         <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
               <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Service <span className="text-brand-green">Areas</span></h1>
               <p className="text-xl text-zinc-400">
                 {BRAND.name} provides premium solar and battery installations across Berkshire, Hampshire, and Oxfordshire.
               </p>
            </div>
         </Reveal>

         {/* Postcode Checker */}
         <Reveal delay={100}>
           <div className="max-w-xl mx-auto mb-20">
             <form onSubmit={handlePostcodeCheck} className="relative">
               <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full p-2 pl-6 shadow-xl focus-within:ring-2 focus-within:ring-brand-green transition-all">
                 <MapPin className="text-zinc-500 mr-3" />
                 <input 
                   type="text" 
                   placeholder="Enter your postcode..." 
                   className="bg-transparent text-white placeholder:text-zinc-600 outline-none flex-grow"
                   value={postcode}
                   onChange={(e) => setPostcode(e.target.value)}
                 />
                 <button className="bg-brand-green hover:bg-emerald-400 text-brand-black font-bold px-6 py-3 rounded-full transition-colors">
                   Check
                 </button>
               </div>
             </form>
             {checkResult && (
               <div className="mt-4 text-center bg-brand-green/10 border border-brand-green/20 text-brand-green p-3 rounded-lg animate-in fade-in slide-in-from-top-2">
                 <CheckCircle2 className="inline-block w-4 h-4 mr-2" />
                 {checkResult}
               </div>
             )}
           </div>
         </Reveal>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left: Interactive Map */}
            <Reveal delay={200}>
               <div className="relative h-[500px] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl z-0">
                  <MapContainer
                    center={centerPosition}
                    zoom={9}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%', zIndex: 0 }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />
                    
                    <Circle 
                      center={centerPosition}
                      radius={radiusMeters}
                      pathOptions={{ 
                        color: '#10b981', 
                        fillColor: '#10b981', 
                        fillOpacity: 0.15,
                        weight: 1
                      }} 
                    />

                    <Marker position={centerPosition}>
                      <Popup>
                        <div className="text-zinc-900">
                          <strong>Carey Electrical HQ</strong><br />
                          63 Bath Rd, Thatcham
                        </div>
                      </Popup>
                    </Marker>

                    {LOCATIONS.map((loc, idx) => (
                      loc.lat && loc.lng && (
                        <Marker 
                          key={idx} 
                          position={[loc.lat, loc.lng]}
                          eventHandlers={{
                            click: () => handleLocationClick(loc.slug),
                          }}
                        >
                          <Popup>
                            <div className="text-zinc-900 cursor-pointer" onClick={() => handleLocationClick(loc.slug)}>
                              <strong>{loc.name}</strong><br />
                              <span className="text-brand-green font-bold hover:underline">View Page &rarr;</span>
                            </div>
                          </Popup>
                        </Marker>
                      )
                    ))}
                  </MapContainer>
                  <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur border border-brand-green/30 px-4 py-2 rounded-lg z-[400] shadow-lg">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></div>
                       <span className="text-xs font-bold text-white uppercase tracking-wider">20 Mile Radius</span>
                    </div>
                  </div>
               </div>
            </Reveal>

            {/* Right: Location Lists */}
            <div className="space-y-8 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
               {Object.keys(groupedLocations).map((county, idx) => (
                 <Reveal key={county} delay={idx * 150 + 300}>
                   <Card className="hover:border-brand-green/30">
                     <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                       <span className="w-2 h-8 bg-brand-green rounded-full" />
                       {county}
                     </h3>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                       {groupedLocations[county].map(loc => (
                         <div 
                           key={loc.slug} 
                           onClick={() => handleLocationClick(loc.slug)}
                           className="flex items-center gap-2 text-zinc-400 hover:text-brand-green transition-colors cursor-pointer group"
                         >
                            <ArrowRight size={14} className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                            <span>{loc.name}</span>
                         </div>
                       ))}
                     </div>
                   </Card>
                 </Reveal>
               ))}
            </div>
         </div>
         
         <div className="mt-16 text-center">
             <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Check Availability in Your Area</Button>
         </div>
       </div>
    </div>
  );
};