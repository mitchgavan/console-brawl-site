import PropTypes from 'prop-types';
import { breakpoints } from '../constants/theme';

const BodyText = ({ paragraphs }) => (
  <div className="wrapper">
    {paragraphs.map(text => <p key={text}>{text}</p>)}

    <style jsx>{`
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
      }
      @media ${breakpoints.medium} {
        .wrapper {
          padding: 5rem 1rem;
        }
      }
    `}</style>
  </div>
);

const { arrayOf, string } = PropTypes;

BodyText.propTypes = {
  paragraphs: arrayOf(string).isRequired,
};

export default BodyText;
