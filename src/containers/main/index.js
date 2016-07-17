import React from 'react';
import Header from '../../components/Header';


class MainScreen extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <div className="main-screen">
        <Header/>
        { this.props.children }
      </div>
    );
  }
}

export default MainScreen;
