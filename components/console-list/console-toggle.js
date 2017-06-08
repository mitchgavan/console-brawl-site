import PropTypes from 'prop-types';
import { breakpoints, colors } from '../../constants/theme';

const ConsoleToggle = ({ developers }) => (
  <div className="root">
    <div className="toggle">
      <div className="toggle__button is-active">All</div>
      {developers.map(developer => (
        <button className="toggle__button" key={developer}>
          {developer}
        </button>
      ))}
    </div>
    <style jsx>{`
      .root {
        margin-top: -32px;
        padding: 0;
        text-align: center;
      }
      .toggle {
        position: relative;
        display: inline-flex;
        justify-content: center;
        padding: 14px;
        background-color: ${colors.black};
        z-index: 1;
      }
      .toggle__button {
        padding: 5px 20px;
        border-radius: 100em;
        color: ${colors.white};
      }
      .toggle__button.is-active {
        background-color: ${colors.darkgrey};
      }
      @media ${breakpoints.medium} {
        .root {
          padding: 0;
        }
      }
  `}</style>
  </div>
);

const { arrayOf, string } = PropTypes;

ConsoleToggle.propTypes = {
  developers: arrayOf(string).isRequired,
};


export default ConsoleToggle;
