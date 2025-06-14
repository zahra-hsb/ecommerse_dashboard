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
          className={`p-2 rounded-xl bg-[#d9d9d95b] outline-0 px-3 focus:shadow-lg w-full shadow-sm ${className} ${icon ? 'pl-12' : ''}`}
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
