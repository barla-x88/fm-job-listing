import { useState } from 'react';
import Filter from './Filter';
import Jobs from './Jobs';
import data from './data.json';

const JobListing = () => {
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
  };

  return (
    <div>
      <Filter data={data} filterChange={filterChange} />
      <Jobs jobs={data} filters={currentFilter} />
    </div>
  );
};
export default JobListing;
