import { breakpoints, colors } from '../constants/theme';

export default () => (
  <div className="wrapper">
    <input type="text" placeholder="search for a game..." />

    <style jsx>{`
      .wrapper {
        padding: 0.5rem 1rem 2rem;
        margin: 0 auto;
        max-width: 600px;
        text-align: center;
      }
      input {
        width: 100%;
        padding: 0.625rem 0.5rem;
        background: rgba(100,100,100,0.5);
        border: 0;
        font-size: 20px;
        color: ${colors.white};
        outline: none;
        text-align: center;
      }
      @media ${breakpoints.medium} {
        .wrapper {
          padding: 1rem 1rem 5rem;
        }
      }
    `}</style>
  </div>
);
