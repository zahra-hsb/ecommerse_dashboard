import { TextInputType } from "@/utils/schemas/types";

const TextInput = ({
  label,
  id,
  type,
  className,
  placeholder,
  dir,
  icon,
  register,
  // name,
  required
}: TextInputType) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <div className="w-full relative">
        {icon}
        <input
          type={type}
          dir={dir}
          className={`p-2 bg-[#d9d9d95b] outline-0 focus:shadow-lg w-full shadow-sm glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary ${className} ${icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
          id={id}
          // name={name}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};

export default TextInput;
