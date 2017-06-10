import PropTypes from 'prop-types';
import { breakpoints, colors } from '../../constants/theme';

const ConsoleToggle = ({ developers, toggle, toggledOn }) => (
  <div className="root">
    <div className="toggle">
      <button
        className={`toggle__button ${toggledOn === 'All' && 'is-active'}`}
        onClick={toggle}
      >
        All
      </button>
      {developers.map(developer => (
        <button
          className={`toggle__button ${toggledOn === developer && 'is-active'}`}
          key={developer}
          onClick={toggle}
        >
          {developer}
        </button>
      ))}
    </div>
    <style jsx>{`
      .root {
        padding: 0;
        text-align: center;
      }
      .toggle {
        position: relative;
        display: flex;
        margin-bottom: 2rem;
        padding: 14px;
        background-color: ${colors.black};
        z-index: 1;
        overflow: auto;
      }
      .toggle__button {
        padding: 7px 20px;
        border-radius: 100em;
        color: ${colors.white};
      }
      .toggle__button.is-active {
        background-color: ${colors.darkgrey};
      }
      @media ${breakpoints.medium} {
        .root {
          margin-top: -30px;
          padding: 0;
        }
        .toggle {
          display: inline-flex;
          justify-content: center;
      }
  `}</style>
  </div>
);

const { arrayOf, func, string } = PropTypes;

ConsoleToggle.propTypes = {
  developers: arrayOf(string).isRequired,
  toggle: func.isRequired,
  toggledOn: string.isRequired,
};


export default ConsoleToggle;
