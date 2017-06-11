import { breakpoints } from '../../constants/theme';
import { URL_EMAIL, URL_TWITTER } from '../../constants/constants';
import Mail from '../../svgs/mail.svg';
import Twitter from '../../svgs/twitter.svg';

const FooterIcons = () => (
  <div>
    <a href={URL_TWITTER}>
      <Twitter width="18" height="18" fill="#fefefe" className="icon icon-twitter" />
    </a>
    <a href={URL_EMAIL}>
      <Mail width="18" height="18" fill="#fefefe" className="icon icon-mail" />
    </a>

    <style jsx>{`
      a {
        color: white;
        text-decoration: none;
        width: 20px;
        height: 20px;
        margin: 0 5px;
      }
      @media ${breakpoints.medium} {
        a {
          margin: 0 0 0 15px;
        }
      }
    `}
    </style>
  </div>
);

export default FooterIcons;
