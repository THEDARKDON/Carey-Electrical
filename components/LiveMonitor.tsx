import React, { useEffect, useState, useRef } from 'react';
import { Sun, Home, Battery, Zap, Car, Wifi, Clock, Info, Moon, Cloud, PoundSterling, Wallet, Sparkles, CloudRain } from 'lucide-react';
import { SectionTitle, Reveal, Card } from './UIComponents';

export const LiveMonitor: React.FC = () => {
  // State for values
  const [timeOfDay, setTimeOfDay] = useState(12); // Hour 0-24
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [weather, setWeather] = useState<'sunny' | 'cloudy'>('sunny'); // New Weather State
  
  const [solarOutput, setSolarOutput] = useState(0);
  const [homeUsage, setHomeUsage] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(65);
  const [gridStatus, setGridStatus] = useState<'import' | 'export' | 'idle'>('idle');
  const [gridValue, setGridValue] = useState(0);
  const [batteryStatus, setBatteryStatus] = useState<'charging' | 'discharging' | 'idle'>('idle');
  const [batteryFlow, setBatteryFlow] = useState(0);

  // Financial States
  const [moneySaved, setMoneySaved] = useState(0); // £/hr
  const [moneyEarned, setMoneyEarned] = useState(0); // £/hr
  const [isOffPeak, setIsOffPeak] = useState(false);

  // Constants
  const PEAK_RATE = 0.27; // £0.27 per kWh
  const OFF_PEAK_RATE = 0.09; // £0.09 per kWh
  const EXPORT_RATE = 0.15; // £0.15 per kWh (SEG)

  // Auto-play time loop
  useEffect(() => {
    let interval: any;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setTimeOfDay(prev => {
          const next = prev + 0.05; // Slower, smoother transition
          return next > 24 ? 0 : next;
        });
      }, 100); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Simulation Logic
  useEffect(() => {
    const hours = timeOfDay;
    
    // Check Off-Peak Window (00:30 to 04:30)
    const offPeakActive = hours >= 0.5 && hours < 4.5;
    setIsOffPeak(offPeakActive);

    // 1. Solar Curve (06:00 to 20:00) - Modified by Weather
    let baseSolar = 0;
    if (hours >= 5.5 && hours <= 20.5) {
      baseSolar = 4.2 * Math.sin(((hours - 5.5) / 15) * Math.PI);
    }
    // Weather Penalty
    const weatherFactor = weather === 'cloudy' ? 0.25 : 1.0; 
    const currentSolar = Math.max(0, baseSolar * weatherFactor);
    
    // 2. Home Load (Morning & Evening Peaks)
    let baseLoad = 0.4;
    if (hours > 7 && hours < 9.5) baseLoad = 3.8; // Morning peak
    if (hours > 17 && hours < 22) baseLoad = 4.5; // Evening peak
    // Low load at night
    if (offPeakActive) baseLoad = 0.2; 
    
    const currentLoad = Math.max(0.2, baseLoad);

    setSolarOutput(currentSolar);
    setHomeUsage(currentLoad);

    // 3. Energy Flow Logic
    const netEnergy = currentSolar - currentLoad;
    let currentGridImport = 0;
    let currentGridExport = 0;
    let currentBatteryFlow = 0;

    if (offPeakActive) {
      // --- OFF PEAK MODE: FORCE CHARGE ---
      // Import grid to cover load + charge battery
      const chargeRate = 3.6; // 3.6kW Charge speed
      
      if (batteryLevel < 100) {
        setBatteryStatus('charging');
        currentBatteryFlow = chargeRate;
        setBatteryFlow(chargeRate);
        if (isAutoPlay) setBatteryLevel(prev => Math.min(100, prev + 0.6)); // Fast night charge
        
        currentGridImport = currentLoad + chargeRate;
        setGridStatus('import');
        setGridValue(currentGridImport);
      } else {
        // Battery full, just cover load
        setBatteryStatus('idle');
        setBatteryFlow(0);
        currentGridImport = currentLoad;
        setGridStatus('import');
        setGridValue(currentGridImport);
      }

    } else {
      // --- STANDARD MODE (Solar Priority) ---
      if (netEnergy > 0) {
        // Excess -> Charge Battery -> Export
        if (batteryLevel < 100) {
          setBatteryStatus('charging');
          setBatteryFlow(Math.min(netEnergy, 3.6));
          if (isAutoPlay) setBatteryLevel(prev => Math.min(100, prev + 0.4));
          
          const remaining = netEnergy - 3.6;
          if (remaining > 0) {
             setGridStatus('export');
             setGridValue(remaining);
             currentGridExport = remaining;
          } else {
             setGridStatus('idle');
             setGridValue(0);
          }
        } else {
          setBatteryStatus('idle');
          setBatteryFlow(0);
          setGridStatus('export');
          setGridValue(netEnergy);
          currentGridExport = netEnergy;
        }
      } else {
        // Deficit -> Discharge Battery -> Import
        const deficit = Math.abs(netEnergy);
        if (batteryLevel > 5) {
          setBatteryStatus('discharging');
          setBatteryFlow(Math.min(deficit, 5.0));
          if (isAutoPlay) setBatteryLevel(prev => Math.max(0, prev - 0.4));
          
          const remainder = deficit - 5.0;
          if (remainder > 0) {
            setGridStatus('import');
            setGridValue(remainder);
            currentGridImport = remainder;
          } else {
            setGridStatus('idle');
            setGridValue(0);
          }
        } else {
          setBatteryStatus('idle');
          setBatteryFlow(0);
          setGridStatus('import');
          setGridValue(deficit);
          currentGridImport = deficit;
        }
      }
    }

    // 4. Financial Calculations
    let savingsPerHour = 0;
    
    if (offPeakActive && batteryStatus === 'charging') {
       // ARBITRAGE SAVINGS: 
       // We are buying at 9p to avoid paying 27p later.
       // Value = EnergyStored * (PeakRate - OffPeakRate)
       savingsPerHour = batteryFlow * (PEAK_RATE - OFF_PEAK_RATE);
    } else {
       // Standard Savings:
       // (Load - GridImport) * PeakRate
       // i.e. Paying 0p instead of 27p for the energy we are using
       const selfPowered = currentLoad - currentGridImport;
       savingsPerHour = Math.max(0, selfPowered * PEAK_RATE);
    }

    setMoneySaved(savingsPerHour);

    // Earnings = Grid Export * Export Rate
    const earningsPerHour = currentGridExport * EXPORT_RATE;
    setMoneyEarned(earningsPerHour);

  }, [timeOfDay, batteryLevel, isAutoPlay, weather]);

  // --- VISUAL HELPERS ---

  // Calculate Sky Gradient based on time
  const getSkyStyle = () => {
    if (timeOfDay >= 0 && timeOfDay < 5) return 'from-indigo-950 via-slate-900 to-black'; // Deep Night (Off Peak)
    if (timeOfDay >= 5 && timeOfDay < 8) return 'from-indigo-900 via-purple-900 to-orange-500'; // Sunrise
    if (timeOfDay >= 8 && timeOfDay < 17) {
       // Day: Check Weather
       if (weather === 'cloudy') return 'from-slate-400 via-slate-300 to-slate-200'; // Cloudy Day
       return 'from-sky-400 via-sky-300 to-blue-200'; // Sunny Day
    }
    if (timeOfDay >= 17 && timeOfDay < 20) return 'from-blue-900 via-purple-800 to-orange-400'; // Sunset
    return 'from-slate-950 via-slate-900 to-slate-900'; // Evening
  };

  const getSunPosition = () => {
    // 6am = 0%, 1pm = 50%, 8pm = 100%
    if (timeOfDay < 5 || timeOfDay > 21) return -20; // Hidden
    return ((timeOfDay - 5) / 16) * 100; 
  };

  const formatTime = (decimalTime: number) => {
    const hrs = Math.floor(decimalTime);
    const mins = Math.floor((decimalTime - hrs) * 60);
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  // SVG Flow Animation
  const FlowPath = ({ 
    active, 
    reverse = false, 
    vertical = false,
    color = "stroke-brand-green"
  }: { active: boolean, reverse?: boolean, vertical?: boolean, color?: string }) => {
    if (!active) return <line x1="0" y1="0" x2="0" y2="0" className="hidden" />;
    
    return (
      <g className={`${active ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <path 
          d={vertical ? "M50,0 L50,100" : "M0,50 L100,50"} 
          className={`${color} stroke-[4px] opacity-30`} 
          fill="none" 
        />
        <path 
          d={vertical ? "M50,0 L50,100" : "M0,50 L100,50"} 
          className={`${color} stroke-[3px]`}
          strokeDasharray="8,12"
          strokeLinecap="round"
          fill="none"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from={reverse ? "20" : "0"} 
            to={reverse ? "0" : "20"} 
            dur={Math.max(0.3, 1.5 - (Math.max(solarOutput, gridValue, batteryFlow)/5)) + "s"} 
            repeatCount="indefinite" 
          />
        </path>
      </g>
    );
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <SectionTitle subtitle="System Intelligence" title="Live Energy Monitor" className="mb-0" />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
             
             {/* Tariff Badge */}
             <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${isOffPeak ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-slate-950 border-slate-700 text-slate-400'}`}>
                {isOffPeak ? <Sparkles size={14} className="animate-pulse" /> : <Zap size={14} />}
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isOffPeak ? `Smart Charge (${(OFF_PEAK_RATE*100).toFixed(0)}p/kWh)` : `Peak Rate (${(PEAK_RATE*100).toFixed(0)}p/kWh)`}
                </span>
             </div>

             {/* Weather Toggle */}
             <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-700">
               <button 
                 onClick={() => setWeather('sunny')}
                 className={`p-2 rounded transition-all ${weather === 'sunny' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-500 hover:text-white'}`}
               >
                 <Sun size={16} />
               </button>
               <button 
                 onClick={() => setWeather('cloudy')}
                 className={`p-2 rounded transition-all ${weather === 'cloudy' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white'}`}
               >
                 <CloudRain size={16} />
               </button>
             </div>

             {/* Time Control */}
             <div className="flex-grow w-full sm:w-64">
                <div className="flex justify-between items-center mb-2 text-white">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-green" />
                    <span className="font-mono font-bold text-lg">{formatTime(timeOfDay)}</span>
                  </div>
                  <button 
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 hover:bg-brand-green hover:text-black px-2 py-1 rounded transition-colors"
                  >
                    {isAutoPlay ? 'Pause' : 'Play Loop'}
                  </button>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="24" 
                  step="0.1"
                  value={timeOfDay}
                  onChange={(e) => {
                    setIsAutoPlay(false);
                    setTimeOfDay(parseFloat(e.target.value));
                  }}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
             </div>
          </div>
        </div>

        {/* --- MONITOR CONTAINER --- */}
        <Reveal>
          <div className="max-w-5xl mx-auto">
            {/* The Glass Screen */}
            <div className="relative h-[650px] md:h-[550px] w-full rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden">
              
              {/* Dynamic Sky Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${getSkyStyle()} transition-colors duration-1000 opacity-80`} />
              
              {/* Celestial Body (Sun/Moon) */}
              <div 
                className="absolute top-12 left-0 w-full h-full pointer-events-none transition-transform duration-100 ease-linear z-0"
                style={{ transform: `translateX(${getSunPosition() - 50}%) translateY(${Math.abs(getSunPosition() - 50) / 2}%)` }}
              >
                 <div className="w-full h-full flex justify-center">
                    {timeOfDay > 5.5 && timeOfDay < 20.5 ? (
                      <div className="relative">
                        <div className={`absolute inset-0 blur-[40px] opacity-60 rounded-full transition-colors duration-1000 ${weather === 'cloudy' ? 'bg-slate-400' : 'bg-amber-400'}`} />
                        {weather === 'cloudy' ? (
                          <Cloud size={64} className="text-slate-200 relative z-10" fill="currentColor" />
                        ) : (
                          <Sun size={64} className="text-amber-200 relative z-10" fill="currentColor" />
                        )}
                      </div>
                    ) : (
                      <Moon size={48} className="text-slate-200" fill="currentColor" />
                    )}
                 </div>
              </div>

              {/* Grid Lines (Visual Decoration) */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />

              {/* --- NODES LAYER --- */}
              <div className="relative z-10 w-full h-full p-4 md:p-8">
                
                {/* 1. TOP: SOLAR */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                   <div className={`w-20 h-20 rounded-2xl bg-slate-900/90 backdrop-blur border-2 flex items-center justify-center shadow-2xl transition-all duration-300 ${solarOutput > 0 ? 'border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.3)]' : 'border-slate-800'}`}>
                      {weather === 'cloudy' ? (
                        <Cloud size={32} className={solarOutput > 0 ? 'text-slate-400' : 'text-slate-600'} />
                      ) : (
                        <Sun size={32} className={solarOutput > 0 ? 'text-amber-400 animate-spin-slow' : 'text-slate-600'} />
                      )}
                   </div>
                   <div className="mt-3 bg-slate-900/90 backdrop-blur border border-slate-800 px-4 py-2 rounded-lg text-center min-w-[120px]">
                      <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Solar PV</div>
                      <div className="text-xl font-mono font-bold text-white leading-none">{solarOutput.toFixed(2)} <span className="text-xs text-slate-500">kW</span></div>
                   </div>
                </div>

                {/* 2. CENTER: HOME */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                   <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-slate-900 border-4 border-slate-800 shadow-2xl flex flex-col items-center justify-center group overflow-hidden">
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 border-4 ${isOffPeak ? 'border-purple-500/30' : 'border-brand-green/30'} rounded-full animate-ping opacity-20`} />
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <Home size={32} className="text-white mb-2" />
                        <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tighter">{homeUsage.toFixed(1)}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">kW Load</span>
                      </div>
                      
                      {/* Inner Glass */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                   </div>
                </div>

                {/* 3. LEFT: BATTERY */}
                <div className="absolute top-[65%] md:top-1/2 left-4 md:left-12 md:-translate-y-1/2 transform -translate-y-1/2 flex flex-col items-center z-20">
                   <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900/90 backdrop-blur border-2 flex items-center justify-center shadow-xl transition-all duration-300 ${batteryStatus === 'charging' ? (isOffPeak ? 'border-purple-500 shadow-neon' : 'border-brand-green shadow-neon') : batteryStatus === 'discharging' ? 'border-amber-400 shadow-neon' : 'border-slate-800'}`}>
                      <Battery size={28} className={batteryStatus === 'charging' ? (isOffPeak ? 'text-purple-400' : 'text-brand-green') : batteryStatus === 'discharging' ? 'text-amber-400' : 'text-slate-600'} />
                   </div>
                   <div className="mt-3 bg-slate-900/90 backdrop-blur border border-slate-800 px-3 py-2 rounded-lg text-center w-[110px] md:w-[130px]">
                      <div className="flex justify-between items-end mb-1">
                         <span className="text-xs text-slate-400 font-bold">BATTERY</span>
                         <span className={`text-xs font-bold ${batteryStatus === 'charging' ? 'text-brand-green' : batteryStatus === 'discharging' ? 'text-amber-400' : 'text-slate-600'}`}>
                           {batteryStatus === 'charging' ? '+' : batteryStatus === 'discharging' ? '-' : ''}{batteryFlow.toFixed(1)}kW
                         </span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-1">
                         <div className={`h-full transition-all duration-300 ${isOffPeak ? 'bg-purple-500' : 'bg-brand-green'}`} style={{ width: `${batteryLevel}%` }} />
                      </div>
                      <div className="text-right text-xs font-mono text-white">{Math.round(batteryLevel)}%</div>
                   </div>
                </div>

                {/* 4. RIGHT: GRID */}
                <div className="absolute top-[65%] md:top-1/2 right-4 md:right-12 md:-translate-y-1/2 transform -translate-y-1/2 flex flex-col items-center z-20">
                   <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900/90 backdrop-blur border-2 flex items-center justify-center shadow-xl transition-all duration-300 ${gridStatus === 'import' ? (isOffPeak ? 'border-purple-500' : 'border-red-500') : gridStatus === 'export' ? 'border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)]' : 'border-slate-800'}`}>
                      <Zap size={28} className={gridStatus === 'import' ? (isOffPeak ? 'text-purple-500' : 'text-red-500') : gridStatus === 'export' ? 'text-blue-400' : 'text-slate-600'} />
                   </div>
                   <div className="mt-3 bg-slate-900/90 backdrop-blur border border-slate-800 px-3 py-2 rounded-lg text-center w-[110px] md:w-[130px]">
                      <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">National Grid</div>
                      <div className={`text-lg font-mono font-bold leading-none ${gridStatus === 'import' ? (isOffPeak ? 'text-purple-400' : 'text-red-400') : gridStatus === 'export' ? 'text-blue-400' : 'text-slate-500'}`}>
                        {gridValue.toFixed(2)} <span className="text-xs">kW</span>
                      </div>
                      <div className="text-[9px] uppercase font-bold mt-1 text-slate-500">
                        {gridStatus === 'idle' ? 'Disconnected' : gridStatus}
                      </div>
                   </div>
                </div>

                {/* 5. EV (Bottom Left - Desktop Only) */}
                <div className="absolute bottom-24 left-20 hidden md:flex flex-col items-center opacity-50">
                   <div className="w-14 h-14 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center">
                      <Car size={20} className="text-slate-500" />
                   </div>
                   <span className="text-[10px] font-bold text-slate-600 mt-2 uppercase">EV Idle</span>
                </div>

                {/* NEW: Financial Ticker */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4">
                   <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full shadow-2xl p-1 flex items-center justify-between">
                      <div className="flex-1 flex flex-col items-center justify-center py-2 px-4 border-r border-slate-700">
                         <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
                           <Wallet size={10} /> 
                           {isOffPeak ? 'Arbitrage Value' : 'Instant Savings'}
                         </div>
                         <div className={`text-xl font-mono font-bold ${isOffPeak ? 'text-purple-400' : 'text-brand-green'}`}>
                           £{moneySaved.toFixed(2)}<span className="text-xs text-slate-500 font-sans">/hr</span>
                         </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center py-2 px-4">
                         <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1"><PoundSterling size={10} /> Grid Earnings</div>
                         <div className="text-xl font-mono font-bold text-blue-400">£{moneyEarned.toFixed(2)}<span className="text-xs text-slate-500 font-sans">/hr</span></div>
                      </div>
                   </div>
                </div>

              </div>

              {/* --- SVG CONNECTIONS LAYER --- */}
              {/* Positioned absolutely to match the centers of the divs above */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Solar (Top: 50, 15) to Home (Center: 50, 50) */}
                <svg x="49" y="18" width="2" height="25" viewBox="0 0 100 100" overflow="visible">
                   <FlowPath active={solarOutput > 0} vertical color="stroke-amber-400" />
                </svg>

                {/* Home (50, 50) to Battery (Left: 10, 50) - Adjusted for mobile layouts */}
                {/* We use a responsive approach by checking window width in JS or assuming consistent % positioning */}
                {/* Battery Center is approx (15, 50) on desktop. Home is (50, 50). Path is (18 to 45) */}
                <svg x="18" y="49" width="28" height="2" viewBox="0 0 100 100" overflow="visible" className="hidden md:block">
                   <FlowPath active={batteryStatus === 'charging'} reverse color={isOffPeak ? "stroke-purple-500" : "stroke-brand-green"} /> 
                   <FlowPath active={batteryStatus === 'discharging'} color="stroke-brand-green" /> 
                </svg>
                {/* Mobile Battery Path (Diagonal) */}
                <svg x="20" y="55" width="25" height="15" viewBox="0 0 100 100" overflow="visible" className="md:hidden">
                   {/* Simplified diagonal logic for mobile not implemented in this generic viewbox, hiding for cleanliness */}
                </svg>

                {/* Home (50, 50) to Grid (Right: 90, 50) */}
                <svg x="54" y="49" width="28" height="2" viewBox="0 0 100 100" overflow="visible" className="hidden md:block">
                   <FlowPath active={gridStatus === 'import'} reverse color={isOffPeak ? "stroke-purple-500" : "stroke-red-500"} /> 
                   <FlowPath active={gridStatus === 'export'} color="stroke-blue-400" /> 
                </svg>
              </svg>

            </div>
          </div>
        </Reveal>

        <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-500 text-sm animate-pulse">
          <Info size={14} />
          <p>Simulation uses live solar data estimates and standard smart tariff rates.</p>
        </div>
      </div>
    </section>
  );
};