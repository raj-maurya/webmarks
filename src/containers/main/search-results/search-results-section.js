import React, { Component } from 'react';
import SearchBar from '../../../components/search-bar';
import SearchResultList from '../../../components/search-result-list';
import { querySearch } from '../../../redux/actions/search';
import { connect } from 'react-redux';

import logo from './logo-small.png';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

class SearchResultsSection extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired,
    searchResults: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();

    this.onPaginate = this.onPaginate.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.params.page === 'undefined') {
      this.onPaginate();
    }
  }

  onSearchQuery(query) {
    const { dispatch } = this.props;
    dispatch(querySearch(query));
  }

  onPaginate(_page) {
    const { query } = this.props.location;
    let page = _page;

    if (typeof page !== 'number' || page < 1) {
      page = 1;
    }

    this.props.history.push(`/search-results/${page}`, { query });
  }

  render() {
    const query = this.props.params.q || '';
    const results = this.props.searchResults.result.json || [];

    return (
      <div className="search-results">
        <div className="search-results__top">
          <div className="search-logo">
            <img src={logo} className="search-logo__img" alt="webmarks" />
          </div>
          <div className="search-container">
            <div className="search-bar">
              <SearchBar value={query} onSearch={() => { this.onSearchQuery(); }} />
            </div>
            <div className="search-menu">
              <li className="search-menu__item"><a href="#">All</a></li>
              <li className="search-menu__item"><a href="#">Websites</a></li>
              <li className="search-menu__item"><a href="#">Facebook</a></li>
            </div>
          </div>
        </div>
        <div className="search-results__list">
          {!this.props.searchResults.meta.isLoading ? <SearchResultList
            results={results}
            page={parseInt(this.props.params.page, 10)}
            paginate={(page) => { this.onPaginate(page); }}
          /> : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchResultsSection);
