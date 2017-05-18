import PropTypes from 'prop-types';

const Button = props => (
  <a
    href={props.href}
    className={`button button-${props.color}`}
  >
    {props.text}

    <style jsx>{`
      .button {
        display: inline-block;
        margin: 0 1rem 1rem;
        padding: 20px;
        width: 200px;
        background-color: #ECE9E6;
        background-image: linear-gradient(to right, #CEDBE8, #9BACBE);
        background-size: 150% auto;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-radius: 100em;
        font-size: 16px;
        transition: all 0.5s;
      }
      .button:hover {
        background-position: right center;
      }
      .button-green {
        background-color: #56ab2f;
        background-image: linear-gradient(to right, #B6E026, #7DB326);
      }
    `}</style>
  </a>
);

const { string } = PropTypes;

Button.defaultProps = {
  color: 'silver',
};

Button.propTypes = {
  color: string,
  text: string.isRequired,
  href: string.isRequired,
};

export default Button;
