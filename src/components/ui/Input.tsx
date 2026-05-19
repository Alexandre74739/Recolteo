interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string | number;
  max?: string | number;
  defaultValue?: string | number;
}

export default function Input({
  id,
  name,
  label,
  type = "text",
  required,
  placeholder,
  min,
  max,
  defaultValue,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-sapin">
        {label}
        {required && <span className="text-peach ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="px-4 py-3 rounded-xl border-2 border-sapin/20 bg-white focus:border-sapin focus:outline-none transition-colors text-sm font-medium placeholder:text-sapin/30 text-sapin"
      />
    </div>
  );
}
