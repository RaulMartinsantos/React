import { Info } from "lucide-react";
interface inputProps extends React.ComponentProps<"input"> {
  legend?: string;
  errorMessage?: string;
}

function Input({ legend, errorMessage, ...props }: inputProps) {
  return (
    <fieldset className="flex flex-1 flex-col max-h-20 text-gray-200 focus-within:text-green-100 mt-6">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <input
        className={`
          w-full h-12 rounded-lg border border-gray-300 px-4 
          text-sm text-gray-100 bg-transparent outline-none min-h-12
          focus:border-2 focus:border-green-10 placeholder-gray-300
        `}
        {...props}
      />
      {errorMessage && (
        <p className="text-red-900 p-2 flex gap-2">
          <Info />
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}

export default Input;
