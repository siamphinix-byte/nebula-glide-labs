import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { MessageSquare, Search, Send, Paperclip, Smile, FolderKanban, Users, Building2 } from 'lucide-react';

type Channel = 'team' | 'client';

type ChatMessage = {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: string;
};

type Conversation = {
  id: number;
  projectId: string;
  project: string;
  name: string;
  role: string;
  channel: Channel;
  online: boolean;
  unread: number;
  messages: ChatMessage[];
};

const projectGroups = [
  { id: 'all', name: 'All Projects', members: 24 },
  { id: 'analytics', name: 'Analytics System', members: 9 },
  { id: 'ai-chatbot', name: 'AI Chatbot', members: 7 },
  { id: 'client-portal', name: 'Client Portal', members: 8 },
];

const initialConversations: Conversation[] = [
  {
    id: 1,
    projectId: 'client-portal',
    project: 'Client Portal',
    name: 'Michael Brown',
    role: 'Client Stakeholder',
    channel: 'client',
    online: false,
    unread: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Yes, they want to move forward with the project.', time: '12:33 PM' },
      { id: 2, sender: 'me', text: 'Excellent work! This calls for a celebration 🎉', time: '01:15 PM' },
      { id: 3, sender: 'other', text: 'Count me in!', time: '01:20 PM' },
      { id: 4, sender: 'me', text: 'Definitely! Drinks after work?', time: '01:26 PM' },
    ],
  },
  {
    id: 2,
    projectId: 'analytics',
    project: 'Analytics System',
    name: 'Sarah Johnson',
    role: 'Data Lead',
    channel: 'team',
    online: true,
    unread: 2,
    messages: [
      { id: 1, sender: 'other', text: 'Dashboard widgets are ready for review.', time: '10:12 AM' },
      { id: 2, sender: 'me', text: 'Perfect. I will validate mobile breakpoints now.', time: '10:14 AM' },
    ],
  },
  {
    id: 3,
    projectId: 'ai-chatbot',
    project: 'AI Chatbot',
    name: 'Robert Taylor',
    role: 'ML Engineer',
    channel: 'team',
    online: true,
    unread: 1,
    messages: [
      { id: 1, sender: 'other', text: 'Intent classifier update is deployed.', time: '09:42 AM' },
      { id: 2, sender: 'me', text: 'Great, share confidence metrics in the thread.', time: '09:44 AM' },
    ],
  },
  {
    id: 4,
    projectId: 'analytics',
    project: 'Analytics System',
    name: 'Amanda White',
    role: 'Finance Controller',
    channel: 'client',
    online: false,
    unread: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Can we lock the milestone billing by Friday?', time: 'Yesterday' },
      { id: 2, sender: 'me', text: 'Yes, we will send the signed summary today.', time: 'Yesterday' },
    ],
  },
];

export function Messenger() {
  const [projectFilter, setProjectFilter] = useState('all');
  const [channelFilter, setChannelFilter] = useState<'all' | Channel>('all');
  const [search, setSearch] = useState('');
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0].id);
  const [draft, setDraft] = useState('');

  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();
    return conversations.filter((item) => {
      const projectOk = projectFilter === 'all' || item.projectId === projectFilter;
      const channelOk = channelFilter === 'all' || item.channel === channelFilter;
      const searchOk = !query || item.name.toLowerCase().includes(query) || item.project.toLowerCase().includes(query);
      return projectOk && channelOk && searchOk;
    });
  }, [conversations, projectFilter, channelFilter, search]);

  const activeConversation = filteredConversations.find((item) => item.id === activeId) || filteredConversations[0];

  const sendMessage = () => {
    if (!draft.trim() || !activeConversation) return;
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === activeConversation.id
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                {
                  id: conversation.messages.length + 1,
                  sender: 'me',
                  text: draft.trim(),
                  time: 'Now',
                },
              ],
              unread: 0,
            }
          : conversation,
      ),
    );
    setDraft('');
  };

  const teamCount = conversations.filter((item) => item.channel === 'team').length;
  const clientCount = conversations.filter((item) => item.channel === 'client').length;

  return (
    <div className="mx-auto h-full max-w-[1500px] space-y-6 pb-20">
      <Reveal direction="down">
        <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Messenger</h1>
            <p className="mt-1 text-sm text-white/60">Project-wise communication across team members and client stakeholders.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-brand-surface px-4 py-2">
              <p className="text-[11px] uppercase tracking-wider text-white/50">Team Threads</p>
              <p className="text-lg font-bold text-brand-primary">{teamCount}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-brand-surface px-4 py-2">
              <p className="text-[11px] uppercase tracking-wider text-white/50">Client Threads</p>
              <p className="text-lg font-bold text-brand-teal">{clientCount}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 xl:grid-cols-[280px_360px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-white/10 bg-brand-surface p-4">
          <div className="mb-3 flex items-center gap-2">
            <FolderKanban className="h-4 w-4 text-brand-secondary" />
            <p className="text-sm font-bold text-white">Project Groups</p>
          </div>
          <div className="space-y-2">
            {projectGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setProjectFilter(group.id)}
                className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors ${
                  projectFilter === group.id
                    ? 'border-brand-primary/40 bg-brand-primary/15 text-white'
                    : 'border-white/10 bg-brand-bg text-white/75 hover:bg-white/5'
                }`}
              >
                <span className="text-sm font-semibold">{group.name}</span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold">{group.members}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-xl border border-white/10 bg-brand-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MessageSquare className="h-4 w-4 text-brand-primary" /> Conversations
            </div>
            <div className="inline-flex rounded-lg border border-white/10 bg-brand-bg p-1 text-xs">
              {[
                { key: 'all', label: 'All' },
                { key: 'team', label: 'Team' },
                { key: 'client', label: 'Clients' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setChannelFilter(tab.key as 'all' | Channel)}
                  className={`rounded-md px-3 py-1.5 font-semibold transition-colors ${
                    channelFilter === tab.key ? 'bg-brand-primary text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search user or project"
              className="h-10 w-full rounded-lg border border-white/15 bg-brand-bg pl-10 pr-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-brand-primary"
            />
          </div>

          <div className="max-h-[560px] space-y-2 overflow-auto pr-1">
            {filteredConversations.map((conversation) => {
              const lastMessage = conversation.messages[conversation.messages.length - 1];
              return (
                <button
                  key={conversation.id}
                  onClick={() => setActiveId(conversation.id)}
                  className={`w-full rounded-lg border p-3 text-left transition-colors ${
                    activeConversation?.id === conversation.id
                      ? 'border-brand-teal/50 bg-brand-teal/10'
                      : 'border-white/10 bg-brand-bg hover:bg-white/5'
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <p className="truncate text-sm font-bold text-white">{conversation.name}</p>
                    <span className="text-[11px] text-white/50">{lastMessage?.time}</span>
                  </div>
                  <p className="mb-1 text-xs text-white/55">{conversation.role} · {conversation.project}</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-xs text-white/65">{lastMessage?.text}</p>
                    {conversation.unread > 0 && <span className="rounded-full bg-brand-primary px-1.5 py-0.5 text-[10px] font-bold text-white">{conversation.unread}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex min-h-[620px] flex-col overflow-hidden rounded-xl border border-white/10 bg-brand-surface">
          {activeConversation ? (
            <>
              <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-base font-bold text-white">{activeConversation.name}</p>
                  <p className="text-xs text-white/55">{activeConversation.role} · {activeConversation.project}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  {activeConversation.channel === 'team' ? <Users className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
                  <span>{activeConversation.channel === 'team' ? 'Team Chat' : 'Client Chat'}</span>
                </div>
              </header>

              <div className="flex-1 space-y-3 overflow-auto bg-brand-bg/60 p-4">
                {activeConversation.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-lg border px-3 py-2 text-sm ${
                        message.sender === 'me'
                          ? 'border-brand-primary/40 bg-brand-primary/20 text-white'
                          : 'border-white/10 bg-brand-surface text-white/85'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="mt-1 text-[10px] text-white/55">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <footer className="border-t border-white/10 p-3">
                <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-brand-bg px-3 py-2">
                  <button className="text-white/55 transition-colors hover:text-white" aria-label="Attach file">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <input
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') sendMessage();
                    }}
                    placeholder="Type a message..."
                    className="h-9 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                  />
                  <button className="text-white/55 transition-colors hover:text-white" aria-label="Add emoji">
                    <Smile className="h-4 w-4" />
                  </button>
                  <button
                    onClick={sendMessage}
                    className="rounded-md bg-brand-teal px-3 py-2 text-brand-bg transition-opacity hover:opacity-90"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </footer>
            </>
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-white/60">
              No conversation found for the selected filters.
            </div>
          )}
        </section>
      </StaggerReveal>
    </div>
  );
}