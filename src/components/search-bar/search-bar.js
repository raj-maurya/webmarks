import React from 'react';

class SearchBar extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func.isRequired
  };

  render() {
    const {onSearch} = this.props;

    return (
      <div className="search-bar">
        <input className="search-bar__input" type="text"/>

        <div className="search-button-container">
          <input type="submit" className="search-button-container__button" onClick={onSearch} value="Search"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
