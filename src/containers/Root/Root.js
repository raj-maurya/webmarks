import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../../routes';

class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    error: PropTypes.object
  };

  render() {
    if (this.props.error) {
      return this.props.children;
    }

    const store = this.props.context.store;
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }

}

export default Root;
