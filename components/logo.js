import PropTypes from 'prop-types';
import { breakpoints } from '../constants/theme';
import LogoSVG from '../svgs/logo.svg';

const Logo = props => (
  <a href="/">
    <LogoSVG
      className={`logo ${props.small && 'small'}`}
    />
    <style jsx>{`
      :global(.logo) {
        width: 215px;
      }
      :global(.small) {
        width: 140px;
      }
      @media ${breakpoints.medium} {
        :global(.small) {
          width: 140px;
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
