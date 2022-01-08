import React from 'react';
import useDebounce from './useDebounce';
import Lupa from '../img/lupa.svg';

const SearchInput = ({ value, onChange, setInput }) => {
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setInput(event.target.value)
    debouncedChange(event.target.value);
  }

  return (
    <div className='submit-line'>
      <input
        className='input-Search'
        type="search"
        value={value}
        onChange={handleChange}
        />
      <span class="input-group-addon">
        <button class="btn-Search" >
          <img src={Lupa} alt="Pesquisar" />
        </button>
      </span>
    </div>
  );
};

export default SearchInput;
