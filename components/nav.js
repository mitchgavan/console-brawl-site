import { colors } from '../constants/theme';

export default () => (
  <nav>
    <a href="#about" className="link">About</a>
    <a href="#games" className="link">Games</a>
    <div className="button-container">
      <a href="#download" className="button">Download</a>
    </div>

    <style jsx>{`
      nav {
        display: flex;
      }
      .link {
        padding: 20px;
        color: ${colors.white};
        text-decoration: none;
        transition: opacity 200ms;
      }
      .link:hover {
        opacity: 0.7;
      }
      .button-container {
        display: flex;
        align-items: center;
      }
      .button {
        display: inline-block;
        margin-left: 12px;
        padding: 10px 20px;
        background-color: transparent;
        color: ${colors.white};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 2px solid ${colors.white};
        border-radius: 100em;
        font-size: 15px;
        transition: all 250ms;
      }
      .button:hover {
        color: ${colors.black};
        background-color: ${colors.white};
      }
    `}</style>
  </nav>
);
