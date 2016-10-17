import React from 'react';
import Header from '../../components/Header';
import Alert from 'react-s-alert';


class MainScreen extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <div className="main-screen">
        <Header/>
        { this.props.children }
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default MainScreen;
