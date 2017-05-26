import { colors } from '../constants/theme';

export default () => (
  <div className="wrapper">
    <input type="text" placeholder="search for a game..." />

    <style jsx>{`
      .wrapper {
        padding: 2rem 1rem;
        margin: 0 auto;
        max-width: 600px;
        text-align: center;
      }
      input {
        width: 100%;
        padding: 0.25rem 0.5rem;
        background: transparent;
        border: 0;
        border-bottom: 2px solid ${colors.green};
        font-size: 20px;
        color: ${colors.white};
        outline: none;
        text-align: center;
      }
    `}</style>
  </div>
);
