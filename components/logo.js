import { PropTypes } from 'react';

const Logo = (props) => (
  <div>
    <img
      src="/static/images/logo.svg"
      alt="Console Brawl"
      className={props.small && 'small'}
    />
    <style jsx>{`
      img {
        width: 240px;
      }
      .small {
        width: 140px;
      }
    `}</style>
  </div>
);

const { bool } = PropTypes;

Logo.propTypes = {
  small: bool,
};

export default Logo;
