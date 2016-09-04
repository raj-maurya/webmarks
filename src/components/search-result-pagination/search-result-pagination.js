import React from 'react';

function pages(data, paginate) {
  return data.map((page, i) => (
    <li className="search-pagination-page" key={i}>
      <a
        href="#"
        className="search-pagination-page__link"
        disabled={page.disable}
        onClick={(e) => {
          e.preventDefault();
          paginate(page.page);
        }}
      >{page.page}</a>
    </li>
  ));
}

function prev(actualPage, paginate) {
  if (actualPage <= 1) {
    return null;
  }

  const page = actualPage - 1;

  return (
    <li className="search-pagination-page">
      <a
        href="#"
        className="search-paginatio-page__link"
        onClick={(e) => {
          e.preventDefault();
          paginate(page);
        }}
      >Prev</a>
    </li>
  );
}

function next(actualPage, lastPage, paginate) {
  if (actualPage >= lastPage) {
    return null;
  }

  const page = actualPage + 1;

  return (
    <li className="search-pagination-page">
      <a
        href="#"
        className="search-paginatio-page__link"
        onClick={(e) => {
          e.preventDefault();
          paginate(page);
        }}
      >Next</a>
    </li>
  );
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
