import React from 'react';

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
                <div className="input-group">
                  <input className="input-group-field" type="text"/>

                  <div className="input-group-button">
                    <input type="submit" className="button" value="Search"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
