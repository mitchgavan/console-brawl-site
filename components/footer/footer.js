import { breakpoints } from '../../constants/theme';
import Logo from '../logo';
import FooterIcons from './footer-icons';

const Footer = () => (
  <footer>
    <div>
      <Logo small />
    </div>
    <div>
      <p>
        &copy; Mitch Gavan 2017. All rights reserved.
      </p>
    </div>
    <div>
      <FooterIcons />
    </div>

    <style jsx>{`
      footer {
        padding: 30px 20px;
        color: white;
        text-align: center;
        background-color: #292929;
      }
      p {
        font-size: 13px;
        font-weight: 400;
        margin: 0.25rem 0 0.5rem;
      }
      @media ${breakpoints.medium} {
        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        footer > div  {
          flex: 1 1 33.3333%;
        }
        footer div:first-child {
          text-align: left;
        }
        footer div:last-child {
          text-align: right;
        }
        .column-left {
          text-align: left;
        }
        .column-right {
          text-align: right;
        }
        p {
          margin: 0;
        }
      }
    `}</style>

  </footer>
);

export default Footer;
