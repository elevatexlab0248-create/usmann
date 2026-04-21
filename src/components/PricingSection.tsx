import React from 'react';
import { Rocket, Zap, Crown } from 'lucide-react';

interface PricingFeature {
  name: string;
  starter: boolean;
  growth: boolean;
  scale: boolean;
}

const features: PricingFeature[] = [
  { name: "Content Strategy Session", starter: true, growth: true, scale: true },
  { name: "Monthly Performance Report", starter: true, growth: true, scale: true },
  { name: "Social Media Management", starter: false, growth: true, scale: true },
  { name: "Dedicated Account Manager", starter: false, growth: true, scale: true },
  { name: "Custom Growth Roadmap", starter: false, growth: false, scale: true },
  { name: "Priority Support 24/7", starter: false, growth: false, scale: true }
];

const PricingSection = () => {
  return (
    <section className="relative py-24 bg-black" id="pricing">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Growth Plans That Scale With You
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="relative group">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8
              transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05]
              hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Starter</h3>
                  <p className="text-sm text-white/60">Perfect for new businesses</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 ${feature.starter ? 'text-white' : 'text-white/30'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.starter ? 'bg-blue-400' : 'bg-white/30'}`} />
                    <span className="text-sm">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-white/5 text-white border border-white/10
                transition-all duration-300 hover:bg-white/10 hover:border-white/20
                hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]
                active:scale-[0.98]">
                Book a Call
              </button>
            </div>
          </div>

          {/* Growth Plan - Highlighted */}
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#4DC035] via-[#4DC035] to-[#4DC035] 
              rounded-2xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative h-full bg-black border border-[#4DC035]/30 rounded-2xl p-8
              transition-all duration-300 hover:scale-[1.02]
              group-hover:border-[#4DC035]/50 group-hover:shadow-[0_0_30px_rgba(77,192,53,0.2)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4DC035] to-[#4DC035]
                text-black text-sm font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-[#4DC035]" />
                <div>
                  <h3 className="text-xl font-bold text-white">Growth</h3>
                  <p className="text-sm text-white/60">For scaling businesses</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 ${feature.growth ? 'text-white' : 'text-white/30'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.growth ? 'bg-[#4DC035]' : 'bg-white/30'}`} />
                    <span className="text-sm">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#4DC035] to-[#4DC035]
                text-black font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,192,53,0.3)]
                hover:scale-[1.02] active:scale-[0.98]">
                Book a Call
              </button>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="relative group">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8
              transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05]
              hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Scale</h3>
                  <p className="text-sm text-white/60">For established brands</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 ${feature.scale ? 'text-white' : 'text-white/30'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.scale ? 'bg-purple-400' : 'bg-white/30'}`} />
                    <span className="text-sm">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-xl bg-white/5 text-white border border-white/10
                transition-all duration-300 hover:bg-white/10 hover:border-white/20
                hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]
                active:scale-[0.98]">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;