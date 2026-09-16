import React from "react";
import InputText from "./input-text";
import { debounce } from "../helpers/utils";
import SearchIcon from "../assets/icons/search.svg?react";
import usePhotos from "../contexts/photos/hooks/use-photos";

function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");
  const { filters } = usePhotos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedsetValue = React.useCallback(
    debounce((value: string) => filters.setQ(value), 200),
    [filters.setQ],
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
