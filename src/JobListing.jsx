import Filter from './Filter';
import Jobs from './Jobs';
import data from './data.json';

const JobListing = () => {
  return (
    <div>
      <Filter data={data} />
      <Jobs />
    </div>
  );
};
export default JobListing;
