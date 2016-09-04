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
          paginate={data.paginate}
        />
      </div>
    </div>
  );
}

function SearchResultList(props) {
  const results = props.results.json;

  if (!Array.isArray(results)) {
    return null;
  }

  const actualPage = Math.round(parseInt(props.page, 10));
  const resultsPerPage = 5;
  const pagesQty = Math.round(results.length / resultsPerPage);
  const pagesPerPage = pagesQty > 10 ? 10 : pagesQty;
  const lastPage = pagesQty;

  if (actualPage < 1 || actualPage > lastPage) {
    props.paginate();
  }

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
  if ((lastPage - actualPage) < Math.round(pagesPerPage / 2)) {
    const actualFirstPage = lastPage - pagesPerPage;
    actualPages = pages.slice(actualFirstPage, lastPage);
  } else if (actualPage > (Math.round(pagesPerPage / 2) + 1)) {
    const actualFirstPage = actualPage - Math.round(pagesPerPage / 2);
    const actualLastPage = actualPage + Math.round(pagesPerPage / 2);
    actualPages = pages.slice(actualFirstPage, actualLastPage);
  } else {
    const actualFirstPage = 0;
    const actualLastPage = pagesPerPage;
    actualPages = pages.slice(actualFirstPage, actualLastPage);
  }

  const data = {
    results: pageResults,
    pages: actualPages,
    paginate: props.paginate,
    actualPage,
    lastPage,
  };

  return render(data);
}

SearchResultList.propTypes = {
  page: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
  paginate: PropTypes.func.isRequired,
};

SearchResultList.defaultProps = { page: 1 };

export default SearchResultList;
