import { Component } from 'react';
import Hamburger from './hamburger';
import Nav from './nav';
import Logo from './logo';
import { breakpoints } from '../constants/theme';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e) {
    e.preventDefault();
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <header>
        <Logo />
        <Hamburger
          isActive={this.state.isActive}
          onToggleClick={this.handleToggleClick}
        />
        <Nav isActive={this.state.isActive} />

        <style jsx>{`
          header {
            padding: 10px 20px;
            color: white;
          }
          @media ${breakpoints.medium} {
            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        `}</style>
      </header>
    );
  }
}
