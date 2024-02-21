import { useState } from 'react';
import Filter from './Filter';
import Jobs from './Jobs';
import data from './data.json';

const JobListing = () => {
  const [currentFilter, setCurrentFilter] = useState([]);

  //handles filter removal
  const filterChange = (e) => {
    const newFilter = [...currentFilter].filter(
      (filter) => filter !== e.target.value
    );
    setCurrentFilter(newFilter);
  };

  //adds new filter
  const addToFilter = (e) => {
    const newFilters = [...currentFilter, e.target.textContent];
    setCurrentFilter(newFilters);
  };

  //clear all filters

  const clearFilters = () => {
    setCurrentFilter([]);
  };

  return (
    <>
      <Filter
        filterChange={filterChange}
        filters={currentFilter}
        clearFilters={clearFilters}
      />
      <Jobs jobs={data} filters={currentFilter} addToFilter={addToFilter} />
    </>
  );
};
export default JobListing;
