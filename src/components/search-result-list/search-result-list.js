import React, { PropTypes } from 'react';
import SearchResultItem from '../search-result-item';
import SearchResultPagination from '../search-result-pagination';

function render(data) {
  const list = data.results.map((result, i) => {
    let title;
    let url;
    let description;

    if (typeof result !== 'undefined') {
      title = result.title;
      url = result.url;
      description = result.description;
    }

    return (
      <SearchResultItem
        key={i}
        title={title}
        url={url}
        description={description}
      />);
  });

  return (
    <div className="search-list">
      <div className="search-list__list">
        {list}
      </div>
      <div className="search-list__pagination">
        <SearchResultPagination
          pages={data.pages}
          page={data.actualPage}
          lastPage={data.lastPage}
        />
      </div>
    </div>
  );
}

function SearchResultList(props) {
  const results = props.results;
  const resultsPerPage = 5;
  const pagesPerPage = 10;
  const pagesQty = results.length / resultsPerPage;
  const lastPage = pagesQty;

  if (props.page < 1 || props.page > lastPage) {
    props.paginate();
  }

  const actualPage = props.page < 1 ? 1 : props.page;
  const start = actualPage === 1 ? 0 : resultsPerPage * (actualPage - 1);
  const end = start + resultsPerPage;
  const pageResults = results.slice(start, end);

  const pages = [...Array(pagesQty)].map((_, i) => {
    const pageNumber = i + 1;
    let disable = false;

    if (actualPage === pageNumber) {
      disable = true;
    }

    return {
      page: pageNumber,
      disable,
    };
  });

  let actualPages;
  if ((lastPage - actualPage) < (pagesPerPage / 2)) {
    const actualFirstPage = lastPage - pagesPerPage;
    actualPages = pages.slice(actualFirstPage, lastPage);
  } else if (actualPage > ((pagesPerPage / 2) + 1)) {
    const actualFirstPage = actualPage - (pagesPerPage / 2);
    const actualLastPage = actualPage + (pagesPerPage / 2);
    actualPages = pages.slice(actualFirstPage, actualLastPage);
  } else {
    const actualFirstPage = 0;
    const actualLastPage = pagesPerPage;
    actualPages = pages.slice(actualFirstPage, actualLastPage);
  }

  const data = {
    results: pageResults,
    pages: actualPages,
    actualPage,
    lastPage,
  };

  return render(data);
}

SearchResultList.propTypes = {
  page: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
};

SearchResultList.defaultProps = { page: 1 };

export default SearchResultList;
