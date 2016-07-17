import React from 'react';
import SearchBar  from '../../../components/search-bar';

export default class HomeSection extends React.Component {

  render() {
    return (
      <div className="home-section">
        <div className="home-section__search">
          <div className="home-search">
            <div className="home-search__title">
              Worldbrain
            </div>
            <div className="home-search__description">
              Make information more trust
            </div>
            <div className="home-search__search-container">
              <div className="home-search__search-input">
                <SearchBar/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}