import React from "react";
import InputText from "./input-text";
import { debounce } from "../helpers/utils";
import SearchIcon from "../assets/icons/search.svg?react";

function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedsetValue = React.useCallback(
    debounce((value: string) => console.log("valor com debounce", value), 200),
    [],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debouncedsetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default PhotosSearch;
