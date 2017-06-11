import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import Hamburger from './hamburger';
import Nav from './nav';
import Logo from '../logo';
import { breakpoints } from '../../constants/theme';

const withToggle = compose(
  withState('isActive', 'toggleActive', false),
  withHandlers({
    toggle: ({ isActive, toggleActive }) => () => toggleActive(!isActive),
  }),
);

const Header = withToggle(({ pathname, isActive, toggle }) => (
  <header>
    <Logo />
    <Hamburger
      isActive={isActive}
      onToggleClick={toggle}
    />
    <Nav isActive={isActive} pathname={pathname} />

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
));


const { string } = PropTypes;

Header.propTypes = {
  pathname: string.isRequired,
};

export default Header;
