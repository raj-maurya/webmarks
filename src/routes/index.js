import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import HomeSection from '../containers/main/home'
import SearchResultsSection from '../containers/main/search-results'
import ContentSourcesSection from '../containers/main/content-sources'
import { browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={HomeSection}/>
    <Route path="/search-results" component={SearchResultsSection}/>
    <Route path="/content-sources" component={ContentSourcesSection}/>
  </Router>
)
