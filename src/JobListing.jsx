import { useState } from 'react';

import Jobs from './Jobs';
import data from './data.json';

const roles = [...new Set(data.map((job) => job.role))];
const levels = [...new Set(data.map((job) => job.level))];
const languages = [...new Set(data.flatMap((job) => job.languages))];
const tools = [...new Set(data.flatMap((job) => job.tools))];

const JobListing = () => {
  const [currentFilter, setCurrentFilter] = useState([]);
  const [currentJobs, setCurrentJobs] = useState(data);

  //filters jobs
  const filterJobs = function (jobs, filters) {
    let tempJobs = [...jobs];

    if (filters.length === 0) {
      return jobs;
    }

    filters.forEach((filter) => {
      //filter by levels
      if (levels.includes(filter)) {
        tempJobs = tempJobs.filter((job) => job.level === filter);
      }

      //filter by roles
      if (roles.includes(filter)) {
        tempJobs = tempJobs.filter((job) => job.role === filter);
      }

      //filter by languages
      if (languages.includes(filter)) {
        tempJobs = tempJobs.filter((job) => job.languages.includes(filter));
      }

      //filter by tools
      if (tools.includes(filter)) {
        tempJobs = tempJobs.filter((job) => job.tools.includes(filter));
      }
    });

    return tempJobs;
  };

  //handles filter removal
  const filterChange = (e) => {
    const newFilter = [...currentFilter].filter(
      (filter) => filter !== e.target.value
    );
    setCurrentFilter(newFilter);
    setCurrentJobs(filterJobs(data, newFilter));
  };

  //adds new filter
  const addToFilter = (e) => {
    if (!currentFilter.includes(e.target.textContent)) {
      const newFilter = [...currentFilter, e.target.textContent];
      setCurrentFilter(newFilter);
      setCurrentJobs(filterJobs(data, newFilter));
    }
  };

  //clear all filters

  const clearFilters = () => {
    setCurrentFilter([]);
  };

  return (
    <>
      <div className="page-header"></div>
      <Jobs
        filters={currentFilter}
        jobs={currentJobs}
        addToFilter={addToFilter}
        filterChange={filterChange}
        clearFilters={clearFilters}
      />
    </>
  );
};
export default JobListing;
