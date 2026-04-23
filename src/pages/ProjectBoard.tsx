import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Filter, Plus, MoreVertical, MessageSquare, Paperclip, CheckCircle2 } from 'lucide-react';

const TASKS = [
  { id: 1, title: 'Market Research Deck', status: 'Brief Pending', col: 'pending', desc: 'Analyze top 10 competitors in the venture studio space.', date: 'Oct 12' },
  { id: 2, title: 'Typography Exploration', status: 'In Progress', col: 'progress', desc: 'Iterating on font pairings for display headers.', date: 'Tomorrow', progress: 40 },
  { id: 3, title: 'Color Palette V2', status: 'In Progress', col: 'progress', desc: '', date: 'Oct 14' },
  { id: 4, title: 'Logo Construction', status: 'Client Review', col: 'review', desc: '', comments: 3 },
  { id: 5, title: 'Brand Questionnaire', status: 'Completed', col: 'completed', desc: '', done: true }
];

export function ProjectBoard() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Reveal direction="down">
        <header className="flex flex-col md:flex-row md:items-center justify-between w-full mb-12 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white">Brand Identity Refresh</h1>
              <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full tracking-wide">ACTIVE</span>
            </div>
            <p className="text-white/60 mt-1 text-lg">Project Ecosystem / Venture Studio</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end gap-2">
              <div className="flex justify-between w-64 items-center mb-1">
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Progress</span>
                <span className="text-sm font-bold text-brand-primary">60%</span>
              </div>
              <div className="w-64 h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary to-[#a166ff] h-full w-[60%] rounded-full shadow-[0_0_12px_rgba(122,60,245,0.6)]"></div>
              </div>
            </div>
          </div>
        </header>
      </Reveal>

      <div className="grid grid-cols-12 gap-8 mb-12">
        <section className="col-span-12 lg:col-span-9 space-y-6">
          <Reveal>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">Task Management</h2>
              <div className="flex gap-3">
                <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(122,60,245,0.4)] hover:brightness-110 transition-all">
                  <Plus className="w-4 h-4" /> New Task
                </button>
              </div>
            </div>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/50">Brief Pending</span>
                <span className="w-5 h-5 bg-white/5 flex items-center justify-center rounded-md text-[10px] font-bold">1</span>
              </div>
              <div className="space-y-4">
                {TASKS.filter(t => t.col === 'pending').map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#ebd356]">In Progress</span>
                <span className="w-5 h-5 bg-[#ebd356]/10 flex items-center justify-center rounded-md text-[10px] font-bold text-[#ebd356]">2</span>
              </div>
              <div className="space-y-4">
                {TASKS.filter(t => t.col === 'progress').map(task => (
                  <TaskCard key={task.id} task={task} color="border-[#ebd356]" />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-black uppercase tracking-widest text-brand-teal">Client Review</span>
                <span className="w-5 h-5 bg-brand-teal/10 flex items-center justify-center rounded-md text-[10px] font-bold text-brand-teal">1</span>
              </div>
              <div className="space-y-4">
                {TASKS.filter(t => t.col === 'review').map(task => (
                  <TaskCard key={task.id} task={task} borderDashed />
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-black uppercase tracking-widest text-white/50">Completed</span>
                <span className="w-5 h-5 bg-white/5 flex items-center justify-center rounded-md text-[10px] font-bold">1</span>
              </div>
              <div className="space-y-4">
                {TASKS.filter(t => t.col === 'completed').map(task => (
                  <TaskCard key={task.id} task={task} done />
                ))}
              </div>
            </div>

          </StaggerReveal>
        </section>

        {/* Right Sidebar Form */}
        <Reveal className="col-span-12 lg:col-span-3 space-y-8" delay={0.4}>
          <div className="bg-brand-surface p-8 rounded-xl shadow-2xl border border-white/5">
            <h3 className="text-lg font-bold mb-6">Task Assignment</h3>
            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Employee</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/50 outline-none text-white py-3 px-4 appearance-none">
                  <option className="bg-brand-surface">Select Employee</option>
                  <option className="bg-brand-surface">Alex Rivera (Designer)</option>
                  <option className="bg-brand-surface">Jordan Smith (Lead)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Task Title</label>
                <input type="text" placeholder="e.g. Website Mockups" className="w-full bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/50 outline-none py-3 px-4 text-white placeholder:text-white/30" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Deadline</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/50 outline-none py-3 px-4 text-white custom-calendar-icon" />
              </div>
              <button 
                className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(122,60,245,0.4)] hover:scale-[1.02] active:scale-95 transition-all mt-4 uppercase tracking-widest text-xs"
                onClick={(e) => e.preventDefault()}
              >
                Assign Task
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function TaskCard({ task, color, borderDashed, done }: any) {
  return (
    <div className={`bg-brand-surface p-5 rounded-xl shadow-2xl border ${borderDashed ? 'border-dashed border-white/20' : 'border-white/5'} hover:border-brand-primary/30 transition-all duration-300 ${color ? `border-l-4 ${color}` : ''} ${done ? 'opacity-50 grayscale' : ''}`}>
      <h4 className={`font-bold text-sm mb-2 ${done ? 'line-through text-white/60' : 'text-white'}`}>{task.title}</h4>
      {task.desc && <p className="text-xs text-white/60 mb-4 line-clamp-2">{task.desc}</p>}
      
      {task.progress && (
        <div className="w-full bg-white/5 h-1 rounded-full mb-4">
          <div className="bg-[#ebd356] h-full rounded-full" style={{ width: `${task.progress}%` }}></div>
        </div>
      )}

      {done && (
        <div className="mt-2">
          <CheckCircle2 className="w-4 h-4 text-brand-teal" />
        </div>
      )}

      {!done && (
        <div className="flex justify-between items-center mt-2">
          {task.comments ? (
            <div className="flex items-center gap-1 text-brand-teal text-[10px] font-bold">
              <MessageSquare className="w-3 h-3" /> {task.comments} COMMENTS
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[10px]">A</div>
          )}
          {task.date && <span className="text-[10px] font-medium text-white/50 uppercase">{task.date}</span>}
        </div>
      )}
    </div>
  );
}
