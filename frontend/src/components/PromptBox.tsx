// components/PromptBox.tsx
import { useState } from 'react';
type PromptBoxProps = {
  onSubmit: (q: string) => void;
  theme: 'dark' | 'white';
};

export default function PromptBox({ onSubmit, theme }: PromptBoxProps) {
  const [prompt, setPrompt] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim()) {
        onSubmit(prompt.trim());
        setPrompt('');
      }
    }
  };

  return (
    <div
      className={`rounded-xl p-2 border focus-within:ring-2 flex items-center gap-2
        ${theme === 'white'
          ? 'bg-white border-gray-300 focus-within:ring-sky-400'
          : 'bg-neutral-900/90 border-emerald-500/20 focus-within:ring-emerald-400/40'}
      `}
    >
      <textarea
        rows={1}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="> type your prompt and press Enter"
        className={`flex-1 resize-none outline-none font-mono px-2 text-sm leading-snug
          ${theme === 'white'
            ? 'bg-transparent text-gray-900 placeholder-gray-400 caret-sky-500'
            : 'bg-transparent text-emerald-200 placeholder-emerald-600/60 caret-emerald-400 hacker-text'}
        `}
      />
      <button
        type="submit"
        onClick={() => {
          if (prompt.trim()) {
            onSubmit(prompt.trim());
            setPrompt('');
          }
        }}
        className={`px-3 py-1.5 rounded-lg font-mono border transition-colors
          ${theme === 'white'
            ? 'bg-sky-100 text-sky-600 border-sky-200 hover:bg-sky-200'
            : 'bg-emerald-600/20 text-emerald-200 border-emerald-500/30 hover:bg-emerald-600/30 drop-shadow-[0_0_6px_rgba(16,185,129,.25)]'}
        `}
      >
        ▷
      </button>
    </div>
  );
}