import PropTypes from 'prop-types';

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
        <p>{description}</p>
      </div>
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
