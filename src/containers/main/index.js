import React from 'react';
import Header from '../../components/Header';


class MainScreen extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <div className="main-screen">
        <div id="container" className="container">
          <div id="output" className="container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
