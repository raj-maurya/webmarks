import React from 'react';
import Header from '../../components/Header';
import s from '../../assets/scss/app.scss';

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
