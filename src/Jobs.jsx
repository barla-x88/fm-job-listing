/* eslint-disable react/prop-types */
const Jobs = (props) => {
  const { jobs, filters } = props;

  const filteredJobs = jobs.filter((job) => {
    if (filters.length === 0) return true;
    if (filters.includes(job.role)) return true;

    if (job.languages.some((language) => filters.includes(language)))
      return true;
  });

  console.log(filteredJobs);
  return <div>Jobs</div>;
};
export default Jobs;
