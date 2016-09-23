import React, { PropTypes } from 'react';
import SearchResultItem from '../search-result-item';
import SearchResultPagination from '../search-result-pagination';

function render(data) {
  const list = data.results.filter((result) => !!result).map((result, i) => {
    const { title, url, description } = result;

    return (
      <SearchResultItem
        key={`search-item${i}`}
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
  const { results } = props;
  const actualPage = Math.ceil(parseInt(props.page, 10));
  const resultsPerPage = 5;
  const pagesQty = Math.ceil(results.length / resultsPerPage);
  const pagesPerPage = Math.min(pagesQty, 10);
  const lastPage = pagesQty;

  if (actualPage < 1 || actualPage > lastPage) {
    props.paginate();
  }

  const start = resultsPerPage * (actualPage - 1);
  const end = start + resultsPerPage;
  const pageResults = results.slice(start, end);

  const pages = [...Array(pagesQty)].map((_, i) => {
    const pageNumber = i + 1;
    return {
      page: pageNumber,
      disabled: actualPage === pageNumber
    };
  });

  let actualPages;
  if ((lastPage - actualPage) < Math.ceil(pagesPerPage / 2)) {
    const actualFirstPage = lastPage - pagesPerPage;
    actualPages = pages.slice(actualFirstPage, lastPage);
  } else if (actualPage > (Math.ceil(pagesPerPage / 2) + 1)) {
    const actualFirstPage = actualPage - Math.ceil(pagesPerPage / 2);
    const actualLastPage = actualPage + Math.ceil(pagesPerPage / 2);
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
  results: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
};

SearchResultList.defaultProps = { page: 1 };

export default SearchResultList;
