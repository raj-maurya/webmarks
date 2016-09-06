import React from 'react';
import SearchBar  from '../../../components/search-bar';
import {querySearch} from '../../../redux/actions/search';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
});

class HomeSection extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    searchResults: React.PropTypes.object.isRequired
  };

  onSearchQuery(query) {
    const {dispatch, history} = this.props;
    dispatch(querySearch(query));
    history.push('/search-results', {query: query});
  }

  render() {
    return (
      <div className="home-section">
        <div className="home-section__search">
          <div className="home-search">
            <div className="home-search__title">
              Worldbrain
            </div>
            <div className="home-search__description">
              The search engine with sources that are trusted by science community.
            </div>
            <div className="home-search__search-container">
              <div className="home-search__search-input">
                <SearchBar onSearch={this.onSearchQuery.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(HomeSection);
