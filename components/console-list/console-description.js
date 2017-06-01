import PropTypes from 'prop-types';
import { breakpoints } from '../../constants/theme';

const ConsoleDescription = (props) => {
  const { name, released, developer, description, reverseOrder } = props;
  return (
    <div className="root">
      <header className={`header ${reverseOrder && 'header-reverse'}`}>
        <h3 className="title">{name}</h3>
        <div className="subtitle">
          Release Date: <strong>{released}</strong>
        </div>
        <div className="subtitle">
          Developer: <strong>{developer}</strong>
        </div>
      </header>
      <div className={`description ${!reverseOrder && 'description-reverse'}`}>
        {description}
      </div>
      <style jsx>{`
        .title {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .description {
          margin-top: 1rem;
        }
        @media ${breakpoints.medium} {
          .header {
            padding-top: 15%;
            text-align: right;
          }
          .header-reverse {
            text-align: left;
          }
          .title {
            font-size: 40px;
          }
          .release {
            font-size: 18px;
          }
          .description {
            position: relative;
            width: 120%;
            margin-top: 2rem;
            padding: 2rem;
            background-color: #444;
          }
          .description-reverse {
            transform: translateX(-16.5%);
          }
        }
      `}
      </style>
    </div>
  );
};

const { bool, string } = PropTypes;

ConsoleDescription.propTypes = {
  description: string.isRequired,
  developer: string.isRequired,
  name: string.isRequired,
  released: string.isRequired,
  reverseOrder: bool.isRequired,
};

export default ConsoleDescription;
