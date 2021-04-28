import React from 'react';
import { connect } from 'react-redux';
import {
  setPriceFilter,
  setAlcoholFilter,
  setSortParam,
  clear,
} from '../store/sortAndFilter';
import {
  PRICE_HIGH,
  PRICE_LOW,
  OVER_TEN,
  UNDER_TEN,
  GIN,
  TEQUILA,
  VODKA,
  RUM,
} from '../selectors/productSelectors';

const initState = {
  priceFilter: 'ALL',
  alcoholFilter: 'ALL',
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
    if (evt.target.name === 'priceFilter') {
      this.props.setPriceFilter(this.state.priceFilter);
    } else {
      this.props.setAlcoholFilter(this.state.alcoholFilter);
    }
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
        <h6 className="h6">Filter:</h6>
        <form onSubmit={this.handleFilter} name="priceFilter" className="mb-3">
          <div className=" input-group w-50 ">
            {/* <label htmlFor="priceFilter" className=" form-label">
              <small>filter by price</small>
            </label> */}
            <span className="input-group-text" id="byPrice">
              price
            </span>
            <select
              name="priceFilter"
              value={this.state.priceFilter}
              onChange={this.handleChange}
              className="form-select form-select-sm col form-control"
            >
              <option value="ALL">All</option>
              <option value={OVER_TEN}>Over $10</option>
              <option value={UNDER_TEN}>Under $10</option>
            </select>
            <button type="submit" className="btn col btn-dark btn-sm">
              apply
            </button>
          </div>
        </form>
        <form
          onSubmit={this.handleFilter}
          name="alcoholFilter"
          className="mb-3"
        >
          <div className=" input-group w-50 ">
            {/* <label htmlFor="alcoholFilter">
              <small>filter by alcohol type</small>
            </label> */}
            <span className="input-group-text" id="byAlch">
              type
            </span>
            <select
              name="alcoholFilter"
              value={this.state.alcoholFilter}
              onChange={this.handleChange}
              className="form-select form-select-sm col form-control"
            >
              <option value="ALL">All</option>
              <option value={GIN}>Gin</option>
              <option value={TEQUILA}>Tequila</option>
              <option value={VODKA}>Vodka</option>
              <option value={RUM}>Rum</option>
            </select>
            <button type="submit" className="btn col btn-dark btn-sm">
              apply
            </button>
          </div>
        </form>
        <form onSubmit={this.handleSort} name="sortParam" className="mb-3">
          <div className=" input-group w-50 ">
            {/* <label htmlFor="sortParam" className=" form-label">
              <small>sort by price</small>
            </label> */}
            <span className="input-group-text" id="lowHigh">
              sort
            </span>
            <select
              name="sortParam"
              value={this.state.sortParam}
              onChange={this.handleChange}
              className="form-select form-select-sm col form-control"
            >
              <option value="UNSORTED">---------</option>
              <option value={PRICE_LOW}>ascending</option>
              <option value={PRICE_HIGH}>descending</option>
            </select>
            <button type="submit" className="btn col btn-dark btn-sm">
              apply
            </button>
          </div>
        </form>
        <button
          type="button"
          onClick={this.handleReset}
          className="btn col btn-dark btn-sm mb-3"
        >
          reset
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    setPriceFilter: (filter) => dispatch(setPriceFilter(filter)),
    setAlcoholFilter: (filter) => dispatch(setAlcoholFilter(filter)),
    setSortParam: (param) => dispatch(setSortParam(param)),
    clear: () => dispatch(clear()),
  };
};
export default connect(null, mapDispatch)(ProductFilters);
