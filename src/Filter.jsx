/* eslint-disable react/prop-types */
const Filter = (props) => {
  const { data, filterChange } = props;

  const roles = [...new Set(data.map((job) => job.role))];
  const languages = [...new Set(data.flatMap((job) => job.languages))];
  const filters = [...roles, ...languages];
  // const filters = ['Frontend', 'CSS', 'JavaScript'];

  return (
    <div className="filter">
      <div className="filter-btns">
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
        <div className="clear-btn-container">
          <button className="clear-btn">Clear</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
