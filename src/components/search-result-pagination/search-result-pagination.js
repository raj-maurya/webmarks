import React from 'react';

function pageLink(data, paginate) {
  return (
    <li className="search-pagination-page" key={`search-page${data.key}`}>
      <a
        href="#"
        className="search-pagination-page__link"
        disabled={data.disabled}
        onClick={(e) => {
          e.preventDefault();
          data.paginate(data.page);
        }}
      >{data.text}</a>
    </li>
  );
}

function pages(data, paginate) {
  return data.map((page, i) => {
    return pageLink({
      page: page.page,
      key: i,
      text: page.page,
      disabled: page.disabled,
      paginate
    });
  });
}

function prev(actualPage, paginate) {
  if (actualPage <= 1) {
    return null;
  }

  const text = 'Prev';
  return pageLink({
    page: actualPage - 1,
    key: text,
    text,
    paginate
  });
}

function next(actualPage, lastPage, paginate) {
  if (actualPage >= lastPage) {
    return null;
  }

  const text = 'Next';
  return pageLink({
    page: actualPage + 1,
    key: text,
    text,
    paginate
  });
}

function SearchResultPagination(props) {
  return (
    <ul className="search-pagination">
      {prev(props.page, props.paginate)}
      {pages(props.pages, props.paginate)}
      {next(props.page, props.lastPage, props.paginate)}
    </ul>
  );
}

SearchResultPagination.propTypes = {
  pages: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
  lastPage: React.PropTypes.number.isRequired,
  paginate: React.PropTypes.func.isRequired,
};

export default SearchResultPagination;
