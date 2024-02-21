/* eslint-disable react/prop-types */
const Filter = (props) => {
  const { filterChange, filters, clearFilters } = props;

  return (
    <>
      <div
        className={filters.length > 0 ? 'filter-btns show-btns' : 'filter-btns'}
      >
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
          <button type="button" onClick={clearFilters} className="clear-btn">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
export default Filter;
