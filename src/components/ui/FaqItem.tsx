import { ChevronDown } from "@deemlol/next-icons";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-sapin/10">
      <button
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sapin font-semibold text-base leading-snug group-hover:text-sapin/70 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-sapin/50 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sapin/60 text-base leading-relaxed pb-5">{answer}</p>
        </div>
      </div>
    </div>
  );
}
