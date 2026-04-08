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
        className={`peer min-h-40 w-full resize-none rounded-[var(--radius-sm)] border border-[var(--border)] bg-white/5 px-4 pb-3 pt-6 text-lg text-white transition duration-300 placeholder:text-transparent focus:border-cyan-300/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)] ${className}`}
        {...props}
      />
      <span className="pointer-events-none absolute left-4 top-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:tracking-[0.18em] peer-focus:text-cyan-200">
        {label}
      </span>
    </label>
  );
}
