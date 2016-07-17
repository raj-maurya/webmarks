import React from 'react';

class SearchBar extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func.isRequired
  };

  handleClick() {
    const {onSearch} = this.props;
    if (this.searchInput !== null) {
      onSearch(this.searchInput.value);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-bar__input" type="text"/>

        <div className="search-button-container">
          <input type="submit" ref={(ref) => this.searchInput = ref} className="search-button-container__button"
                 onClick={this.handleClick.bind(this)} value="Search"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
