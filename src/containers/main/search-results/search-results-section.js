import React from 'react';
import SearchBar  from '../../../components/search-bar';

import SearchResultItem from './search-result-item';
import logo from './logo-small.png';

export default class SearchResultsSection extends React.Component {

  render() {
    return (
      <div className="search-results">
        <div className="search-results__top">
          <div className="search-logo">
            <img src={logo} className="search-logo__img" alt="webmarks"/>
          </div>
          <div className="search-container">
            <div className="search-bar">
              <SearchBar/>
            </div>
            <div className="search-menu">
              <li className="search-menu__item"><a href="#">All</a></li>
              <li className="search-menu__item"><a href="#">Websites</a></li>
              <li className="search-menu__item"><a href="#">Facebook</a></li>
            </div>
          </div>
        </div>
        <div className="search-results__list">
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>
      </div>
    );
  }
}
