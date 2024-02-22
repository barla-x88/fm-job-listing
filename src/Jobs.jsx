/* eslint-disable react/prop-types */
import Filter from './Filter';
const Jobs = (props) => {
  const { jobs, filters, addToFilter, filterChange, clearFilters } = props;

  const filteredJobs = jobs.filter((job) => {
    //return all jobs if no filter is applied
    if (filters.length === 0) return true;

    if (filters.includes(job.role) || filters.includes(job.level)) return true;

    if (job.languages.some((language) => filters.includes(language)))
      return true;
  });

  console.log(filteredJobs);
  return (
    <section className="jobs">
      {/* Filters */}
      <Filter
        filterChange={filterChange}
        filters={filters}
        clearFilters={clearFilters}
      />

      {/* Jobs List */}
      {filteredJobs.map((job) => (
        <div key={job.id} className={job.featured ? 'job featured-job' : 'job'}>
          <div className="job-logo">
            <img src={job.logo} alt={job.company} />
          </div>
          <div className="job-desc">
            <div className="desc-header">
              <p>
                <span className="company">{job.company}</span>
              </p>
              <p>
                {job.new && <span className="is-new">New!</span>}
                {job.featured && <span className="is-featured">Featured</span>}
              </p>
            </div>
            <div className="job-position">{job.position}</div>
            <div className="job-info">
              <ul>
                <li className="job-posted">{job.postedAt}</li>
                <li className="job-contract">{job.contract}</li>
                <li className="job-location">{job.location}</li>
              </ul>
            </div>
          </div>
          <div className="job-tags">
            {[job.role, job.level, ...job.languages].map((tag, i) => (
              <button
                type="button"
                className="tag"
                key={i}
                onClick={addToFilter}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Jobs;
