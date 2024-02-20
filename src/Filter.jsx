import { useState } from 'react';

/* eslint-disable react/prop-types */
const Filter = (props) => {
  const { data } = props;

  const roles = [...new Set(data.map((job) => job.role))];
  const languages = [...new Set(data.flatMap((job) => job.languages))];
  const filters = [...roles, ...languages];
  const [currentFilter, setCurrentFilter] = useState([]);

  const filterChange = (e) => {
    if (e.target.checked) {
      setCurrentFilter([...currentFilter, e.target.value]);
    } else {
      const newFilter = [...currentFilter].filter(
        (filter) => filter !== e.target.value
      );
      setCurrentFilter(newFilter);
    }

    console.log(currentFilter);
  };

  return (
    <div className="filter">
      <form className="filter-boxes">
        {filters.map((filter, index) => (
          <div key={index}>
            <label htmlFor={filter}>{filter}</label>
            <input
              type="checkbox"
              value={filter}
              id={filter}
              onChange={filterChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
export default Filter;
