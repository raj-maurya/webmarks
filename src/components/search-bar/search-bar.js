import React from 'react';

class SearchBar extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.string
  };

  handleClick() {
    const {onSearch, defaultValue} = this.props;
    const {inputValue} = this.state || {};
    if (inputValue && this.searchInput !== null) {
      onSearch(inputValue || defaultValue);
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props && this.props.value ? this.props.value : '') !== (nextProps && nextProps.value ? nextProps.value : '');
  }

  render() {
    const {value}= this.props;
    return (
      <div className="search-bar">
        <input className="search-bar__input" defaultValue={value} onChange={this.handleChange.bind(this)} type="text"/>

        <div className="search-button-container">
          <input type="submit" ref={(ref) => this.searchInput = ref}
                 className="search-button-container__button"
                 onClick={this.handleClick.bind(this)} value="Search"/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
