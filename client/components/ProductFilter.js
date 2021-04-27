import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setSortParam, clear } from '../store/sortAndFilter';
import {
  PRICE_HIGH,
  PRICE_LOW,
  OVER_TEN,
  UNDER_TEN,
  SWEET,
  DRY,
} from '../selectors/productSelectors';

initState = {
  filter: 'ALL',
  sortParam: 'UNSORTED',
};

class ProductFilters extends React.Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  handleFilter(evt) {
    evt.preventDefault();
    this.props.setFilter(this.state.filter);
  }

  handleSort(evt) {
    evt.preventDefault();
    this.props.setSortParam(this.state.sortParam);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleReset() {
    this.props.clear();
    this.setState(initState);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFilter} name="filter">
          <select
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          >
            <option value="ALL">ALL</option>
            <option value={OVER_TEN}>Over $10</option>
            <option value={UNDER_TEN}>Under $10</option>
            <option value={SWEET}>Sweet</option>
            <option value={DRY}>Dry</option>
          </select>
          <button type="submit">filter</button>
        </form>
        <form onSubmit={this.handleSort} name="sortParam">
          <select
            name="sortParam"
            value={this.state.sortParam}
            onChange={this.handleChange}
          >
            <option value="UNSORTED">Unsorted</option>
            <option value={PRICE_LOW}>Price Low `{'>'}` High</option>
            <option value={PRICE_HIGH}>Price High `{'>'}` Low</option>
          </select>
          <button type="submit">sort</button>
        </form>
        <button type="button" onClick={this.handleReset}>
          reset
        </button>
      </div>
    );
  }
}

// const mapState = (state) => {
//   return {
//     filter: state.sortAndFilter.filter,
//     sortParam: state.sortAndFilter.sortParam,
//   };
// };

const mapDispatch = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
    setSortParam: (param) => dispatch(setSortParam(param)),
    clear: () => dispatch(clear()),
  };
};
export default connect(null, mapDispatch)(ProductFilter);
