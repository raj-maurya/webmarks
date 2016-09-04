import React from 'react';

class SearchResultItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '"Generation 25": Gelebte Einheit - Gelernte Grenzen',
    url: 'http://www.dw.com/de/s%C3%BCndenbock-der-eu-junckers-dilemma/a-19391383',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut ' +
      'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
      'ut aliquip exea commodo consequat.',
  };

  render() {
    const { title, url, description } = this.props;

    return (
      <div className="search-item">
        <div className="search-item__title">{title}</div>
        <div className="search-item__url">{url}</div>
        <div className="search-item__description">
          {description}
        </div>
      </div>
    );
  }
}

export default SearchResultItem;
