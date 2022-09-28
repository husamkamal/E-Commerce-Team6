/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './search.css';

function Search({ names, setFilterProduct }) {
  const [input, setInput] = useState('');
  const [matches, setMatches] = useState([]);

  const handleChoose = (e) => {
    setInput(e.target.textContent);
    setMatches([]);
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
    if (!input.trim()) {
      setMatches([]);
    }

    setMatches(
      names
        .filter((match) =>
          match.name.toLowerCase().trim().includes(input.toLowerCase().trim())
        )
        .map((match) => (
          <li
            key={`${match.name}${match.id}`}
            onClick={handleChoose}
            role="presentation"
          >
            {match.name}
          </li>
        ))
    );
  };

  const handleClickSearch = () => {
    setFilterProduct((prevState) => ({
      ...prevState,
      search: input,
    }));
  };

  return (
    <section className="search-container">
      <div className="search-form">
        <input
          className="search-input"
          value={input}
          onChange={handleSearch}
          onKeyUp={handleSearch}
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="search-btn">
          <i
            onClick={handleClickSearch}
            className="fa-regular fa-magnifying-glass"
          />
        </button>
      </div>
      <ul className="matches">{matches}</ul>
    </section>
  );
}

Search.propTypes = {
  names: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

Search.propTypes = {
  setFilterProduct: PropTypes.func.isRequired,
};

export default Search;
