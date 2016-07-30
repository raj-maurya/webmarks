import React from 'react';
import SearchBar  from '../../../components/search-bar';
import {querySearch} from '../../../redux/actions/search';
import { connect } from 'react-redux';

import SearchResultItem from './search-result-item';
import logo from './logo-small.png';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
});

class SearchResultsSection extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired,
    searchResults: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const {dispatch, location} = this.props;
    if (location && location.query && location.query.q) {
      dispatch(querySearch(location.query.q));
    }
  }

  onSearchQuery(query) {
    const {dispatch} = this.props;
    dispatch(querySearch(query));
  }

  renderSearchResults(results = []) {
    return results.map((item)=> {
      return <SearchResultItem {...item}/>
    });
  }

  onLogoClick() {
    const {history} = this.props;
    history.push('/');
  }

  render() {
    const {location, searchResults} = this.props;
    const query = location && location.query && location.query.q || '';

    return (
      <div className="search-results">
        <div className="search-results__top">
          <div className="search-logo">
            <img src={logo} onClick={this.onLogoClick.bind(this)} className="search-logo__img" alt="webmarks"/>
          </div>
          <div className="search-container">
            <div className="search-bar">
              <SearchBar value={query} onSearch={this.onSearchQuery.bind(this)}/>
            </div>
            <div className="search-menu">
              <li className="search-menu__item"><a href="#">All</a></li>
              <li className="search-menu__item"><a href="#">Websites</a></li>
              <li className="search-menu__item"><a href="#">Facebook</a></li>
            </div>
          </div>
        </div>
        {searchResults.meta.isLoading ? <div className="search-results__loading">Loading ...</div> : ''}
        {searchResults.error.isError ? <div className="search-results__error">Error {searchResults.error}</div> : ''}
        {!(searchResults.error.isError && searchResults.meta.isLoading) ?
          <div className="search-results__list">
            {this.renderSearchResults(searchResults.result)}
          </div> : ''}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchResultsSection);
