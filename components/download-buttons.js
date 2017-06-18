import AppStoreLogo from '../svgs/app-store.svg';
import GooglePlayLogo from '../svgs/google-play.svg';
import { breakpoints } from '../constants/theme';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../constants/constants';

export default () => (
  <div id="download">
    <a href={APP_STORE_URL}>
      <AppStoreLogo className="icon" />
    </a>
    <a href={GOOGLE_PLAY_URL}>
      <GooglePlayLogo className="icon" />
    </a>

    <style jsx>{`
      div {
        margin-top: -1.5rem;
        padding: 0 1rem 3rem;
        text-align: center;
        display: flex;
        justify-content: center;
      }
      a {
        margin: 0 5px;
      }
      @media ${breakpoints.medium} {
        div {
          margin-top: -3.5rem;
          padding: 0 1rem 5rem;
        }
        a {
          margin: 10px;
        }
      }
    `}</style>

  </div>
);
