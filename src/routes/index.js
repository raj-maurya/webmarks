import React from 'react';
import { Route } from 'react-router';
import MainContainer from '../containers/main';
import HomeSection from '../containers/main/home';
import SearchResultsSection from '../containers/main/search-results';
import ContentSourcesSection from '../containers/main/content-sources';

export default (
  <Route path="/" component={MainContainer} >
    <Route path="/" component={HomeSection} />
    <Route path="/search-results" component={SearchResultsSection}>
      <Route path="/search-results/:page" component={SearchResultsSection} />
    </Route>
    <Route path="/content-sources" component={ContentSourcesSection} />
  </Route>
);
