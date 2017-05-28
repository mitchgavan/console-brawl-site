import PropTypes from 'prop-types';
import Link from 'next/link';
import jump from 'jump.js';
import { colors, breakpoints } from '../constants/theme';

const handleDownloadClick = () => {
  jump('#download');
};

const Nav = props => (
  <div>
    <nav className={`${(props.isActive ? 'is-active' : '')}`}>
      <Link prefetch href="/about">
        <a className="link">About</a>
      </Link>
      <Link prefetch href="/consoles">
        <a className="link">Consoles</a>
      </Link>
      <div className="button-container">
        {props.pathname === '/' ?
          <button onClick={handleDownloadClick} className="link button">
            Download
          </button>
          :
          <a href="/#download" className="link button">
            Download
          </a>
        }
      </div>
    </nav>

    <style jsx>{`
      nav {
        max-height: 0;
        width: 100%;
        overflow-y: hidden;
        transition: max-height 500ms ease-out;
      }
      nav.is-active {
        max-height: 300px;
      }
      .button {
        font-size: 100%;
        padding: 0;
        border: 0;
        background-color: transparent;
        color: ${colors.white};
        line-height: 1;
      }
      .link {
        display: block;
        padding: 10px 4px;
        color: ${colors.white};
        text-decoration: none;
        transition: opacity 200ms;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
      }
      .link:hover {
        opacity: 0.7;
      }

      @media ${breakpoints.medium} {
        .hamburger {
          display: none;
        }
        nav {
          display: flex;
          max-height: none;
        }
        .link {
          padding: 20px;
        }
        .button-container {
          display: flex;
          align-items: center;
        }
        .button {
          display: inline-block;
          margin-left: 12px;
          padding: 12px 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 2px solid ${colors.white};
          border-radius: 100em;
          font-size: 15px;
          cursor: pointer;
          transition: all 250ms;
        }
        .button:hover {
          color: ${colors.black};
          background-color: ${colors.white};
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

const { bool, string } = PropTypes;

Nav.propTypes = {
  isActive: bool.isRequired,
  pathname: string.isRequired,
};

export default Nav;
