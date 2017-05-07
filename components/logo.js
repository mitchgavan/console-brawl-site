import { PropTypes } from 'react';
import { breakpoints } from '../constants/theme';

const Logo = props => (
  <a href="/">
    <img
      src="/static/images/logo.svg"
      alt="Console Brawl"
      className={props.small && 'small'}
    />
    <style jsx>{`
      img {
        width: 215px;
      }
      .small {
        width: 140px;
      }
      @media ${breakpoints.medium} {
        img {
          width: 240px;
        }
      }
    `}</style>
  </a>
);

const { bool } = PropTypes;

Logo.defaultProps = {
  small: false,
};

Logo.propTypes = {
  small: bool,
};

export default Logo;
