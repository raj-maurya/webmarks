import React from 'react';

class SearchBar extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  };

  handleClick() {
    const {onSearch} = this.props;
    if (this.searchInput !== null) {
      onSearch(this.searchInput.value);
    }
  }

  render() {
    const {value}= this.props;
    return (
      <div className="search-bar">
        <input className="search-bar__input" type="text"/>

        <div className="search-button-container">
          <input type="submit" ref={(ref) => this.searchInput = ref} value={value || ''} className="search-button-container__button"
                 onClick={this.handleClick.bind(this)} value="Search"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
