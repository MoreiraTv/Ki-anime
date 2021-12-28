import React from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange, setInput }) => {
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setInput(event.target.value)
    debouncedChange(event.target.value);
  }

  return (
    <input
      type="search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
