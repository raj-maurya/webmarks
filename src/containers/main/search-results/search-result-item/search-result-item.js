import React from 'react';

class SearchResultItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  };

  render() {
    const {title, url, description} = this.props;

    return (
      <div className="search-item">
        <div className="search-item__title"><a href={url} target="_blank">{title}</a></div>
        <div className="search-item__url"><a href={url} target="_blank">{url}</a></div>
        <div className="search-item__description">
          {description}
        </div>
      </div>
    );
  }
}

export default SearchResultItem;
