interface SelectProps extends React.ComponentProps<"select"> {
  legend?: string;
}

function Select({ legend, children, ...props }: SelectProps) {
  return (
    <fieldset
      className={`
      flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100
      mt-6
    `}
    >
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <select
        className={`
        w-full h-12 rounded-lg border border-gray-300 px-4 text-sm
        text-gray-100 bg-transparent outline-none focus:border-2 
        focus:border-green-100 placeholder-gray-300
      `}
        {...props}
      >
        <option value="" disabled hidden>
          Selecione a categoria
        </option>
        {children}
      </select>
    </fieldset>
  );
}

export default Select;
