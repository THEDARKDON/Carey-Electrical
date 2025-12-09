import React, { useState, useEffect } from 'react';
import { SectionTitle, Card, Reveal, SimpleBarChart } from './UIComponents';
import { Sun, Battery, PoundSterling, Zap, ArrowRight, PieChart, TrendingUp, Leaf, Wallet, BarChart3 } from 'lucide-react';

interface SolarCalculatorProps {
  onRequestQuote?: (data: { bill: number; systemSize: number; battery: number; savings: number }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onRequestQuote }) => {
  // Inputs
  const [bill, setBill] = useState(200);
  const [systemSize, setSystemSize] = useState(6); // kW
  const [batterySize, setBatterySize] = useState(5); // kWh
  const [activeTab, setActiveTab] = useState<'breakdown' | 'environment'>('breakdown');
  const [showFinance, setShowFinance] = useState(false); // New Toggle

  // Constants
  const ELECTRICITY_IMPORT_RATE = 0.29; // £ per kWh
  const ELECTRICITY_EXPORT_RATE = 0.15; // £ per kWh (SEG)
  const ANNUAL_YIELD_PER_KW = 900; // kWh (UK Average)
  
  // -- CALCULATIONS ENGINE --

  // 1. Derive Annual Consumption from Monthly Bill
  const annualConsumptionkWh = (bill * 12) / ELECTRICITY_IMPORT_RATE;

  // 2. Calculate Total Generation
  const annualGenerationkWh = systemSize * ANNUAL_YIELD_PER_KW;

  // 3. Calculate Self Consumption Ratio
  const baseSelfConsumptionkWh = Math.min(annualGenerationkWh * 0.45, annualConsumptionkWh);
  
  const batteryUsableCapacity = batterySize * 0.9; // 90% Depth of Discharge
  const batteryAnnualThroughput = Math.min(
    batteryUsableCapacity * 250, // Approx cycles per year
    Math.max(0, annualGenerationkWh - baseSelfConsumptionkWh) // Cannot store more than excess solar
  );

  // Total energy from system used in house
  const totalSelfConsumedkWh = Math.min(baseSelfConsumptionkWh + batteryAnnualThroughput, annualConsumptionkWh);
  
  // 4. Calculate Export
  const exportedkWh = Math.max(0, annualGenerationkWh - totalSelfConsumedkWh);

  // 5. Financials
  const annualBillSavings = totalSelfConsumedkWh * ELECTRICITY_IMPORT_RATE;
  const annualExportIncome = exportedkWh * ELECTRICITY_EXPORT_RATE;
  const totalAnnualBenefit = annualBillSavings + annualExportIncome;
  const monthlyBenefit = totalAnnualBenefit / 12;

  // 6. Grid Independence Score
  const independencePercentage = Math.min(100, Math.round((totalSelfConsumedkWh / annualConsumptionkWh) * 100));

  // 7. Costs & ROI (Estimated)
  const estimatedSystemCost = 3000 + (systemSize * 950) + (batterySize * 650);
  const roiYears = estimatedSystemCost / totalAnnualBenefit;
  const breakEvenYear = new Date().getFullYear() + Math.ceil(roiYears);

  // 8. Finance Calculation (Simple interest approximation for demo)
  // Assuming 10 year term at 7.9% APR
  const financeTermYears = 10;
  const interestRate = 0.079;
  const monthlyFinanceCost = (estimatedSystemCost * (1 + (interestRate * financeTermYears))) / (financeTermYears * 12);
  const cashflow = monthlyBenefit - monthlyFinanceCost;

  // 9. Cumulative Cashflow Data for Chart (10 Years)
  const cumulativeData = [];
  let runningTotal = -estimatedSystemCost;
  for (let i = 1; i <= 10; i++) {
    // Add annual benefit, assume 5% energy price inflation
    const inflationMultiplier = Math.pow(1.05, i - 1);
    runningTotal += (totalAnnualBenefit * inflationMultiplier);
    cumulativeData.push(Math.round(runningTotal));
  }

  // -- DYNAMIC UI HELPERS --

  const getBackgroundSize = (value: number, min: number, max: number) => {
    return { backgroundSize: `${((value - min) * 100) / (max - min)}% 100%` };
  };

  const recommendedSystemSize = Math.min(12, Math.ceil((annualConsumptionkWh / ANNUAL_YIELD_PER_KW) * 2) / 2);

  const handleRequestClick = () => {
    if (onRequestQuote) {
      onRequestQuote({
        bill,
        systemSize,
        battery: batterySize,
        savings: Math.round(totalAnnualBenefit)
      });
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-32 relative overflow-hidden bg-brand-black/50">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brand-green/5 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          subtitle="Interactive Estimator" 
          title="Calculate Your ROI" 
          center 
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* --- LEFT COLUMN: INPUTS --- */}
          <div className="xl:col-span-5 space-y-6">
            <Reveal delay={100}>
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-xl backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green group-hover:w-2 transition-all duration-300" />
                
                <div className="flex justify-between items-end mb-6">
                  <label className="flex items-center gap-3 text-white font-bold text-lg">
                    <div className="p-2.5 bg-zinc-800 rounded-xl text-brand-green shadow-lg">
                      <PoundSterling size={22} />
                    </div>
                    Current Monthly Bill
                  </label>
                  <span className="text-3xl font-bold text-white tracking-tight">£{bill}</span>
                </div>

                <input 
                  type="range" 
                  min="50" 
                  max="600" 
                  step="10" 
                  value={bill} 
                  onChange={(e) => setBill(Number(e.target.value))} 
                  style={getBackgroundSize(bill, 50, 600)}
                  className="w-full mb-4 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
                
                <div className="flex justify-between text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  <span>£50</span>
                  <span>High Usage (£600+)</span>
                </div>

                <div className="mt-6 p-3 bg-brand-green/10 border border-brand-green/20 rounded-lg flex items-start gap-3">
                  <TrendingUp size={16} className="text-brand-green mt-1 flex-shrink-0" />
                  <p className="text-xs text-brand-green/80 leading-relaxed">
                    Spending <strong>£{bill * 12}/yr</strong>. A larger bill usually means faster savings as you utilize more of your own solar energy.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-xl backdrop-blur-md relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-brand-glow group-hover:w-2 transition-all duration-300" />
                 
                <div className="flex justify-between items-end mb-6">
                  <label className="flex items-center gap-3 text-white font-bold text-lg">
                    <div className="p-2.5 bg-zinc-800 rounded-xl text-brand-glow shadow-lg">
                      <Sun size={22} />
                    </div>
                    Solar System Size
                  </label>
                  <span className="text-3xl font-bold text-white tracking-tight">{systemSize} kW</span>
                </div>
                
                <input 
                  type="range" 
                  min="2" 
                  max="16" 
                  step="0.5" 
                  value={systemSize} 
                  onChange={(e) => setSystemSize(Number(e.target.value))} 
                  style={getBackgroundSize(systemSize, 2, 16)}
                  className="w-full mb-4"
                />
                
                <div className="flex justify-between items-center">
                  <div className="flex justify-between text-xs font-medium text-zinc-500 uppercase tracking-wide w-full">
                    <span>2kW</span>
                    <span>16kW (Large)</span>
                  </div>
                </div>

                {systemSize !== recommendedSystemSize && (
                   <div 
                     className="mt-4 flex items-center justify-between text-xs text-brand-glow bg-brand-glow/5 p-3 rounded border border-brand-glow/20 cursor-pointer hover:bg-brand-glow/10 transition-colors"
                     onClick={() => setSystemSize(recommendedSystemSize)}
                   >
                     <div className="flex items-center gap-2">
                       <Zap size={14} /> 
                       <span>Smart Recommendation: <strong>{recommendedSystemSize} kW</strong></span>
                     </div>
                     <span className="underline">Apply</span>
                   </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-xl backdrop-blur-md relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 group-hover:w-2 transition-all duration-300" />
                 
                <div className="flex justify-between items-end mb-6">
                  <label className="flex items-center gap-3 text-white font-bold text-lg">
                    <div className="p-2.5 bg-zinc-800 rounded-xl text-emerald-500 shadow-lg">
                      <Battery size={22} />
                    </div>
                    Battery Storage
                  </label>
                  <span className="text-3xl font-bold text-white tracking-tight">{batterySize} kWh</span>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="20" 
                  step="2.5" 
                  value={batterySize} 
                  onChange={(e) => setBatterySize(Number(e.target.value))} 
                  style={getBackgroundSize(batterySize, 0, 20)}
                  className="w-full mb-4"
                />
                 <div className="flex justify-between text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  <span>No Battery</span>
                  <span>20kWh</span>
                </div>
                
                {batterySize === 0 && (
                   <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-200">
                     Without a battery, you may be exporting up to {Math.round((annualGenerationkWh * 0.55) / annualGenerationkWh * 100)}% of your free energy back to the grid for pennies!
                   </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* --- RIGHT COLUMN: OUTPUTS --- */}
          <div className="xl:col-span-7">
            <Reveal delay={400}>
              <div className="relative">
                {/* Glow Behind */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-green via-teal-500 to-brand-glow rounded-3xl blur-xl opacity-20" />
                
                <div className="bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl relative shadow-2xl">
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-zinc-800 gap-6">
                    <div>
                      <h3 className="text-3xl font-extrabold text-white mb-2">Projected Returns</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`cursor-pointer transition-colors ${activeTab === 'breakdown' ? 'text-brand-green font-bold' : 'text-zinc-500 hover:text-white'}`} onClick={() => setActiveTab('breakdown')}>
                          Financial Breakdown
                        </span>
                        <div className="h-4 w-[1px] bg-zinc-700" />
                        <span className={`cursor-pointer transition-colors ${activeTab === 'environment' ? 'text-brand-green font-bold' : 'text-zinc-500 hover:text-white'}`} onClick={() => setActiveTab('environment')}>
                          Environmental Impact
                        </span>
                      </div>
                    </div>
                    
                    {/* Finance Toggle */}
                    <div className="flex items-center gap-3 bg-zinc-900 p-2 rounded-lg border border-zinc-700">
                      <span className={`text-xs font-bold uppercase tracking-wider ${!showFinance ? 'text-white' : 'text-zinc-500'}`}>Cash</span>
                      <button 
                        onClick={() => setShowFinance(!showFinance)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${showFinance ? 'bg-brand-green' : 'bg-zinc-700'}`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${showFinance ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                      <span className={`text-xs font-bold uppercase tracking-wider ${showFinance ? 'text-white' : 'text-zinc-500'}`}>Finance</span>
                    </div>
                  </div>
                  
                  {activeTab === 'breakdown' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      
                      {/* Total Annual Benefit */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-zinc-700 hover:border-brand-green/40 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                           <div className="p-3 bg-brand-green/20 rounded-lg text-brand-green">
                             <PoundSterling size={24} />
                           </div>
                           <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded">YEAR 1</span>
                        </div>
                        <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-1">
                          {showFinance ? 'Monthly Cashflow' : 'Total Annual Benefit'}
                        </p>
                        <div className="flex items-baseline gap-1">
                          {showFinance ? (
                            <div className="flex flex-col">
                              <span className={`text-4xl font-extrabold tracking-tight ${cashflow >= 0 ? 'text-brand-green' : 'text-amber-400'}`}>
                                {cashflow >= 0 ? '+' : '-'}£{Math.abs(cashflow).toFixed(0)}<span className="text-lg text-zinc-400">/mo</span>
                              </span>
                              <span className="text-xs text-zinc-500 mt-1">Savings (£{monthlyBenefit.toFixed(0)}) vs Loan (£{monthlyFinanceCost.toFixed(0)})</span>
                            </div>
                          ) : (
                            <span className="text-5xl font-extrabold text-white tracking-tight">
                              £{totalAnnualBenefit.toFixed(0)}
                            </span>
                          )}
                        </div>
                        
                        {!showFinance && (
                          <div className="mt-4 space-y-2">
                             <div className="flex justify-between text-xs text-zinc-400">
                               <span>Bill Savings</span>
                               <span className="text-white">£{annualBillSavings.toFixed(0)}</span>
                             </div>
                             <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                               <div className="bg-white h-full" style={{ width: `${(annualBillSavings/totalAnnualBenefit)*100}%` }} />
                             </div>
                             <div className="flex justify-between text-xs text-zinc-400">
                               <span>Export Income</span>
                               <span className="text-brand-green">£{annualExportIncome.toFixed(0)}</span>
                             </div>
                             <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                               <div className="bg-brand-green h-full" style={{ width: `${(annualExportIncome/totalAnnualBenefit)*100}%` }} />
                             </div>
                          </div>
                        )}
                      </div>

                      {/* Break Even / 20 Year / Chart */}
                      <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-700 hover:border-brand-green/40 transition-all flex flex-col justify-between">
                         <div>
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">10-Year Cashflow</p>
                              <BarChart3 size={16} className="text-zinc-500" />
                            </div>
                            
                            {/* NEW: Simple Bar Chart Visualization */}
                            <SimpleBarChart data={cumulativeData} />
                            
                         </div>
                         <div className="mt-4 pt-4 border-t border-zinc-800">
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400 font-medium">{showFinance ? 'Estimated Install Cost' : 'Break Even'}</span>
                              <span className="text-xl font-bold text-white">{showFinance ? `£${estimatedSystemCost.toLocaleString()}` : `${roiYears.toFixed(1)} Years`}</span>
                            </div>
                            <div className="text-right text-xs text-brand-green mt-1">{showFinance ? 'Subject to survey' : `Profit start: ${breakEvenYear}`}</div>
                         </div>
                      </div>

                      {/* Generation Stats */}
                      <div className="md:col-span-2 bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-wrap gap-8 items-center justify-between">
                         <div>
                            <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Total Generation</p>
                            <p className="text-2xl font-bold text-white">{Math.round(annualGenerationkWh).toLocaleString()} kWh</p>
                         </div>
                         <div>
                            <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Self Consumed</p>
                            <p className="text-2xl font-bold text-brand-green">{Math.round(totalSelfConsumedkWh).toLocaleString()} kWh</p>
                         </div>
                         <div>
                            <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Energy Independence</p>
                            <p className="text-2xl font-bold text-white">{independencePercentage}%</p>
                         </div>
                      </div>

                    </div>
                  ) : (
                    <div className="bg-brand-green/10 p-8 rounded-2xl border border-brand-green/20 text-center animate-in fade-in zoom-in duration-300">
                       <Leaf className="w-16 h-16 text-brand-green mx-auto mb-4 animate-bounce" />
                       <h4 className="text-2xl font-bold text-white mb-2">Significant Carbon Reduction</h4>
                       <p className="text-zinc-300 mb-8 max-w-md mx-auto">By installing this system, you are directly contributing to a cleaner future.</p>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-zinc-900 p-4 rounded-xl">
                             <p className="text-3xl font-bold text-white">{(annualGenerationkWh * 0.233 / 1000).toFixed(2)}</p>
                             <p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Tonnes CO2 Saved / Yr</p>
                          </div>
                          <div className="bg-zinc-900 p-4 rounded-xl">
                             <p className="text-3xl font-bold text-white">{Math.round((annualGenerationkWh * 0.233) / 22)}</p>
                             <p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Trees Planted Equiv.</p>
                          </div>
                       </div>
                    </div>
                  )}

                  <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col md:flex-row gap-6 items-center justify-between">
                     <p className="text-zinc-500 text-sm italic max-w-sm">
                       *Estimates only. Returns vary based on roof angle, orientation, and shading.
                     </p>
                     <button 
                       onClick={handleRequestClick}
                       className="w-full md:w-auto px-8 py-4 bg-brand-green hover:bg-emerald-400 text-brand-black font-bold rounded-xl shadow-neon hover:shadow-neon-hover transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                     >
                       Request Detailed Proposal <ArrowRight size={20} />
                     </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};