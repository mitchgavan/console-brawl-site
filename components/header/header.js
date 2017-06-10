import { Component } from 'react';
import PropTypes from 'prop-types';
import Hamburger from './hamburger';
import Nav from './nav';
import Logo from '../logo';
import { breakpoints } from '../../constants/theme';

class Header extends Component {
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
        <Nav isActive={this.state.isActive} pathname={this.props.pathname} />

        <style jsx>{`
          header {
            padding: 0 20px;
            color: white;
          }
          @media ${breakpoints.medium} {
            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 20px;
            }
          }
        `}</style>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  pathname: string.isRequired,
};

export default Header;
