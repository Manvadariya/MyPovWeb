import React from 'react';
import { Users, Layers } from 'lucide-react';

const FeatureSection = () => {
  return (
    <div id="features" className="w-full flex justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[95vw] rounded-[45px] bg-black py-20 px-4 sm:px-6 lg:px-8 font-sans text-white scale-[0.87] origin-top">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-16 space-y-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#58d293]" />
              <span className="text-[#58d293] font-medium tracking-wide">FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight">
              You don't have to choose between<br className="hidden md:block" />
              cost, time, and quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* ROW 1 */}
            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15311/15311499.png "
                  alt="AI Magic"
                  className="w-16 h-16 object-contain"
                />
                </div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                Smart Prompts <br />for Perfect Results
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="bg-[#111] rounded-3xl p-10 flex flex-col justify-center border border-white/10 lg:col-span-2 min-h-[320px]">
              <h3 className="text-white font-medium text-2xl mb-2">Generation Speed</h3>
              <div className="text-8xl font-bold tracking-tighter text-white mb-6">80%</div>
              <div className="space-y-2">
                <p className="text-white text-2xl font-bold">Lightning fast iterations.</p>
                <p className="text-gray-400 text-lg">Don't wait for inspiration. Generate variations instantly.</p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="bg-gradient-to-br from-[#60a5fa] to-[#2563eb] rounded-3xl p-8 flex flex-col justify-center lg:col-span-2 min-h-[260px] relative overflow-hidden shadow-2xl shadow-blue-900/20">
               <div className="absolute right-[-30px] top-8 w-48 opacity-40 mix-blend-overlay rotate-6 pointer-events-none">
                  <div className="bg-white/40 h-28 w-full rounded-lg border border-white/30 backdrop-blur-sm mb-3 transform translate-x-3"></div>
                  <div className="bg-white/40 h-28 w-full rounded-lg border border-white/30 backdrop-blur-sm"></div>
               </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-4">
                  <Layers className="w-3 h-3 text-white" />
                  <span className="text-white text-sm font-bold tracking-wider uppercase">Pro Tools</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter text-white mb-4 drop-shadow-sm">Layer Control</div>
                <p className="text-blue-50 text-xl font-medium leading-relaxed max-w-sm">
                  AI isn't perfect, but you are. Edit masks, adjust opacity, and tweak layers manually.
                </p>
              </div>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                   <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl">
                   <img
                    src='https://cdn-icons-png.flaticon.com/512/80/80666.png '
                    alt='No destructive'
                    className="w-16 h-16 object-contain"
                    />
                   </div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                Non-destructive <br />Editing Workflow
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Creative Staff"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* ROW 3 */}
            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-white tracking-widest font-bold">MYPOV</h3>
                  <span className="text-xs tracking-[0.2em] text-gray-400 block mt-1">MOBILE SUITE</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                iOS & Android <br /> Compatible
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                alt="Mobile Workflow"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col justify-center lg:col-span-2 min-h-[260px] text-black shadow-xl shadow-white/5">
              <h3 className="text-slate-900 font-bold text-2xl mb-2 tracking-tight">Workflow Efficiency</h3>
              <div className="text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-900 mb-4">10x</div>
              <div className="space-y-2 border-l-4 border-blue-600 pl-6">
                <p className="text-slate-900 text-2xl font-bold">Faster from Idea to Feed.</p>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">
                  Skip the desktop. Create, edit, and post directly from your phone with studio quality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
