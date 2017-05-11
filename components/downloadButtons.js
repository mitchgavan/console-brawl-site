import AppStoreLogo from '../svgs/app-store.svg';
import GooglePlayLogo from '../svgs/google-play.svg';
import { breakpoints } from '../constants/theme';

export default () => (
  <div id="download">
    <a href="https://itunes.apple.com/us/app/console-brawl/id1191387673?ls=1&mt=8">
      <AppStoreLogo className="icon" />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.consolebrawl&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
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
