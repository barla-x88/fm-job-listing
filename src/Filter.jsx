/* eslint-disable react/prop-types */
const Filter = (props) => {
  const { data } = props;

  const roles = [...new Set(data.map((job) => job.role))];
  const languages = [...new Set(data.flatMap((job) => job.languages))];
  const filters = [...roles, ...languages];

  return (
    <div className="filter">
      <div className="filter-btns">
        {filters.map((filter, index) => (
          <button key={index} className="filter-btn">
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Filter;
