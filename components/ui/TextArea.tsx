import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextArea({ label, className = "", id, ...props }: TextAreaProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="group relative block">
      <textarea
        id={inputId}
        placeholder=" "
        className={`peer min-h-40 w-full resize-none rounded-[var(--radius-sm)] border border-white/10 bg-slate-950/25 px-4 pb-3 pt-6 text-base text-white transition duration-300 placeholder:text-transparent focus:border-indigo-500/50 focus:bg-slate-950/40 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] ${className}`}
        {...props}
      />
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.18em] peer-focus:text-indigo-300 font-semibold">
        {label}
      </span>
    </label>
  );
}
