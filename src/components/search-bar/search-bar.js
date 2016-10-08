import React from 'react';

class SearchBar extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  };

  handleSubmit(event) {
    event.preventDefault();
    const {onSearch} = this.props;
    if (this.searchInput !== null) {
      onSearch(this.searchInput.value);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="search-bar">
          <input className="search-bar__input" type="text"
            ref={(ref) => this.searchInput = ref}/>
          <div className="search-button-container">
            <input type="submit" className="search-button-container__button" value="Search"/>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar;
