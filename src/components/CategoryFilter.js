import PropTypes from 'prop-types';
import { generateCategories } from '../containers/BooksForm';

function CategoryFilter(props) {
  const { changehandler } = props;
  const options = generateCategories();
  return (
    <select onChange={(e) => changehandler(e.target.value)}>
      <option value="">All</option>
      {options}
    </select>
  );
}

CategoryFilter.propTypes = {
  changehandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
