import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, Plus, FileImage, HardDrive, Image as ImageIcon, Calendar } from 'lucide-react';

const mediaFiles = [
  { id: 1, name: 'v-taskly-saas-pic.png', size: '127.38 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 2, name: 't-taskly-saas-pic.png', size: '162.47 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 3, name: 'u-taskly-saas-pic.png', size: '282.82 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 4, name: 'q-taskly-saas-pic.png', size: '151.09 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 5, name: 'r-taskly-saas-pic.png', size: '188.54 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 6, name: 's-taskly-saas-pic.png', size: '352.9 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 7, name: 'p-taskly-saas-pic.png', size: '208.92 KB', date: '9/17/2025', type: 'PNG', color: '#5b8cff' },
  { id: 8, name: 'favicon.png', size: '1.34 KB', date: '8/20/2025', type: 'PNG', color: '#ebd356' },
  { id: 9, name: 'logo-dark.png', size: '3.1 KB', date: '8/20/2025', type: 'PNG', color: '#bbf600' },
  { id: 10, name: 'logo-light.png', size: '2.7 KB', date: '8/20/2025', type: 'PNG', color: '#d4bbff' }
];

export function MediaLibrary() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-[26px] font-bold tracking-tight text-white">Media Library</h1>
          <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.3)]">
            <Plus className="w-4 h-4"/> Upload Media
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 mb-6">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="relative w-full lg:w-[400px]">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                <input type="text" placeholder="Search media files..." className="pl-11 pr-4 py-2.5 w-full bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                 <div className="flex items-center gap-2 bg-[#131313] border border-white/5 px-4 py-2.5 rounded-xl">
                    <FileImage className="w-4 h-4 text-[#bbf600]" />
                    <span className="font-bold text-white text-[13px]">10 Files</span>
                 </div>
                 <div className="flex items-center gap-2 bg-[#131313] border border-white/5 px-4 py-2.5 rounded-xl">
                    <HardDrive className="w-4 h-4 text-[#bbf600]" />
                    <span className="font-bold text-white text-[13px]">1.45 MB</span>
                 </div>
                 <div className="flex items-center gap-2 bg-[#131313] border border-white/5 px-4 py-2.5 rounded-xl">
                    <ImageIcon className="w-4 h-4 text-[#5b8cff]" />
                    <span className="font-bold text-white text-[13px]">10 Images</span>
                 </div>
              </div>
           </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
         <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-6 min-h-[500px]">
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
               {mediaFiles.map((file) => (
                  <div key={file.id} className="bg-[#131313] border border-white/5 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:border-white/20 transition-all shadow-sm">
                     <div className="h-[140px] w-full bg-white/5 relative flex items-center justify-center p-4">
                        {/* Fake image representation - just a styling block since we cant upload actual images here easily */}
                        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase flex items-center gap-1 z-10 border border-white/10">
                           <FileImage className="w-3 h-3" /> {file.type}
                        </div>
                        {file.name.includes('favicon') || file.name.includes('logo') ? (
                           <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl text-white opacity-80" style={{ backgroundColor: file.color }}>
                              {file.name.charAt(0).toUpperCase()}
                           </div>
                        ) : (
                           <div className="w-full h-full border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center group-hover:border-[#5b8cff]/40 transition-colors">
                              <ImageIcon className="w-8 h-8 text-white/20 group-hover:text-[#5b8cff]/50 transition-colors" />
                           </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                           <button className="bg-white/10 hover:bg-[#bbf600] hover:text-[#131313] transition-colors rounded-full p-2 text-white border border-white/20">
                             <Search className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                     <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-bold text-[13px] text-white truncate mb-3" title={file.name}>{file.name}</h3>
                        <div className="flex flex-col gap-2 mt-auto text-[11px] font-medium text-white/40">
                           <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                             <HardDrive className="w-3 h-3" />
                             <span>{file.size}</span>
                           </div>
                           <div className="flex items-center gap-1.5">
                             <Calendar className="w-3 h-3" />
                             <span>{file.date}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </StaggerReveal>
         </div>
      </Reveal>

    </div>
  );
}
