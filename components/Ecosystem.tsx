import React, { useState } from 'react';
import { Sun, Zap, Battery, Home, Car, Droplets, ArrowRight } from 'lucide-react';
import { SectionTitle, Reveal, Card } from './UIComponents';

type Scenario = 'sunny' | 'night' | 'ev-charge' | 'winter';

export const SmartEcosystem: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('sunny');

  const scenarios = {
    sunny: {
      title: "Sunny Afternoon",
      desc: "Solar powers the home first. Excess energy fills the Libbi battery. Once full, the Eddi diverts energy to heat water.",
      flows: { solar: 'out', home: 'in', battery: 'in', grid: 'idle', ev: 'idle', water: 'in' }
    },
    night: {
      title: "Night Time",
      desc: "The sun is down. Your home runs seamlessly off the energy stored in the Libbi battery during the day.",
      flows: { solar: 'idle', home: 'in', battery: 'out', grid: 'idle', ev: 'idle', water: 'idle' }
    },
    'ev-charge': {
      title: "Eco Smart Charging",
      desc: "The Zappi detects excess solar generation and sends it directly to your EV, ensuring you drive on 100% green energy.",
      flows: { solar: 'out', home: 'in', battery: 'idle', grid: 'idle', ev: 'in', water: 'idle' }
    },
    winter: {
      title: "Winter Flux",
      desc: "Low solar generation. The system intelligently charges the battery from the grid during cheap overnight tariffs (e.g. Octopus Flux).",
      flows: { solar: 'idle', home: 'in', battery: 'in', grid: 'out', ev: 'idle', water: 'idle' }
    }
  };

  const current = scenarios[scenario];

  const DeviceNode: React.FC<{ 
    icon: React.ElementType, 
    label: string, 
    status: 'in' | 'out' | 'idle',
    position: string,
    color?: string
  }> = ({ icon: Icon, label, status, position, color = 'text-white' }) => (
    <div className={`absolute ${position} flex flex-col items-center transition-all duration-500 z-20`}>
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 flex items-center justify-center bg-slate-900 shadow-2xl transition-all duration-500 ${
        status !== 'idle' 
          ? 'border-brand-green shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-110' 
          : 'border-slate-700 opacity-70 grayscale'
      }`}>
        <Icon className={`${status !== 'idle' ? color : 'text-slate-500'} w-8 h-8 md:w-10 md:h-10 transition-colors duration-300`} />
      </div>
      <div className={`mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${
        status !== 'idle' ? 'bg-brand-green/10 border-brand-green text-brand-green' : 'bg-slate-800/50 border-slate-700 text-slate-500'
      }`}>
        {label}
      </div>
    </div>
  );

  const ConnectionLine: React.FC<{ 
    from: string, 
    to: string, 
    active: boolean 
  }> = ({ from, to, active }) => {
    // This is a simplified visual representation using absolute positioning/rotation
    // In a real app, SVG paths would be more precise
    const getStyle = () => {
      // Coordinates relative to center hub
      if (from === 'top' && to === 'center') return 'top-0 left-1/2 -translate-x-1/2 h-[50%] w-1 origin-bottom';
      if (from === 'center' && to === 'bottom') return 'bottom-0 left-1/2 -translate-x-1/2 h-[50%] w-1 origin-top';
      if (from === 'center' && to === 'left') return 'left-0 top-1/2 -translate-y-1/2 w-[50%] h-1 origin-right';
      if (from === 'center' && to === 'right') return 'right-0 top-1/2 -translate-y-1/2 w-[50%] h-1 origin-left';
      if (from === 'center' && to === 'bottom-right') return 'right-[15%] bottom-[15%] w-[40%] h-1 -rotate-45 origin-right';
      return '';
    };

    return (
      <div className={`absolute ${getStyle()} bg-slate-800 z-0 overflow-hidden`}>
        {active && (
          <div className="absolute inset-0 bg-brand-green animate-[shimmer_1s_infinite]" />
        )}
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Integration" title="The Smart Ecosystem" center />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6">Real-World Scenarios</h3>
            {Object.keys(scenarios).map((key) => {
              const s = scenarios[key as Scenario];
              const isActive = scenario === key;
              return (
                <div 
                  key={key}
                  onClick={() => setScenario(key as Scenario)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer group ${
                    isActive 
                      ? 'bg-brand-green/10 border-brand-green shadow-neon' 
                      : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`font-bold ${isActive ? 'text-brand-green' : 'text-white group-hover:text-slate-200'}`}>
                      {s.title}
                    </h4>
                    {isActive && <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <Reveal>
              <div className="relative aspect-square md:aspect-[4/3] bg-slate-900/30 rounded-full border border-slate-800 shadow-inner flex items-center justify-center max-w-2xl mx-auto">
                
                {/* Lines - Simplified for Layout */}
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-500" />
                   <div className="absolute top-0 bottom-0 left-1/2 right-1/2 w-0.5 bg-slate-500" />
                   <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-slate-500 origin-left rotate-45" />
                </div>

                {/* Animated Flow Indicators */}
                <div className={`absolute top-[25%] left-1/2 w-1 h-20 -translate-x-1/2 bg-gradient-to-b from-amber-400 to-transparent transition-opacity duration-300 ${current.flows.solar === 'out' ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                <div className={`absolute bottom-[25%] left-1/2 w-1 h-20 -translate-x-1/2 bg-gradient-to-t from-red-500 to-transparent transition-opacity duration-300 ${current.flows.grid === 'out' ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                <div className={`absolute top-1/2 right-[25%] h-1 w-20 -translate-y-1/2 bg-gradient-to-l from-emerald-500 to-transparent transition-opacity duration-300 ${current.flows.battery === 'out' ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />

                {/* Central Hub (Inverter/Home) */}
                <div className="relative z-30 w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-600 flex items-center justify-center shadow-2xl">
                  <Home size={40} className="text-white" />
                  <div className="absolute -bottom-8 text-xs font-bold text-slate-500 uppercase tracking-widest">Inverter</div>
                </div>

                {/* Nodes */}
                <DeviceNode 
                  icon={Sun} 
                  label="Solar PV" 
                  status={current.flows.solar as any} 
                  position="top-8 left-1/2 -translate-x-1/2" 
                  color="text-amber-400"
                />
                
                <DeviceNode 
                  icon={Zap} 
                  label="Grid" 
                  status={current.flows.grid as any} 
                  position="bottom-8 left-1/2 -translate-x-1/2" 
                  color="text-red-400"
                />

                <DeviceNode 
                  icon={Battery} 
                  label="Libbi" 
                  status={current.flows.battery as any} 
                  position="top-1/2 right-4 -translate-y-1/2" 
                  color="text-emerald-400"
                />

                <DeviceNode 
                  icon={Car} 
                  label="Zappi EV" 
                  status={current.flows.ev as any} 
                  position="top-1/2 left-4 -translate-y-1/2" 
                  color="text-blue-400"
                />

                <DeviceNode 
                  icon={Droplets} 
                  label="Eddi Hot Water" 
                  status={current.flows.water as any} 
                  position="bottom-20 right-12" 
                  color="text-cyan-400"
                />

              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};