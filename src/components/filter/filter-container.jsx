import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../store/actions/action';
import Filter from './filter';

export function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.filterState,
  };
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;
