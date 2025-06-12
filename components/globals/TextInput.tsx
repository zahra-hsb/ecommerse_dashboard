import { HTMLInputTypeAttribute } from "react";

const TextInput = ({
  label,
  id,
  type,
  className,
  placeholder,
  dir
}: {
  label?: string;
  id?: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl"
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full px-5">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        dir={dir}
        className={`p-2 rounded-xl bg-[#d9d9d95b] outline-0 px-3 focus:shadow-lg w-full shadow-sm ${className}`}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default TextInput;
