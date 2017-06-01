import PropTypes from 'prop-types';
import { breakpoints } from '../../constants/theme';

const Hamburger = props => (
  <button
    className={`hamburger hamburger--spring ${(props.isActive ? 'is-active' : '')}`}
    type="button"
    onClick={props.onToggleClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>

    <style jsx>{`
      /*TODO move styles from hamburger.scss here*/

      .hamburger {
        float: right;
        margin: 4px 0 0;
        outline: none;
      }
      @media ${breakpoints.medium} {
        .hamburger {
          display: none;
        }
      }
    `}</style>
  </button>
);

const { bool, func } = PropTypes;

Hamburger.propTypes = {
  isActive: bool.isRequired,
  onToggleClick: func.isRequired,
};

export default Hamburger;
