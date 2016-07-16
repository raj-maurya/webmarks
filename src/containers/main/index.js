import React from 'react';
import Header from '../Header';
import s from 'main-screen.css';

export default class MainScreen extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render () {
    return (
      <div className="main-screen">
        <section>
          <Header/>
          { this.props.children }
        </section>
      </div>
    );
  }
}
