import React from 'react';

function pages(data) {
  return data.map((page, i) => {
    return (
      <li className="search-pagination-page" key={i}>
        <a
          href="#"
          className="search-pagination-page__link"
          disabled={page.disable}
        >{page.page}</a>
      </li>
    );
  });
}

function prev(actualPage) {
  if (actualPage <= 1) {
    return null;
  }

  return (
    <li className="search-pagination-page">
      <a href="#" className="search-paginatio-page__link">Prev</a>
    </li>
  );
}

function next(actualPage, lastPage) {
  if (actualPage >= lastPage) {
    return null;
  }

  return (
    <li className="search-pagination-page">
      <a href="#" className="search-paginatio-page__link">Next</a>
    </li>
  );
}

function SearchResultPagination(props) {
  return (
    <ul className="search-pagination">
      {prev(props.page)}
      {pages(props.pages)}
      {next(props.page, props.lastPage)}
    </ul>
  );
}

SearchResultPagination.propTypes = {
  pages: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
  lastPage: React.PropTypes.number.isRequired,
};

export default SearchResultPagination;
