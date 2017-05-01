import Logo from './logo';
import FooterIcons from './footerIcons';
import { breakpoints } from '../constants/theme';

export default () => (
  <footer>
    <div className="tl">
      <Logo small />
    </div>
    <div>
      <p>
        &copy; Mitch Gavan 2017. All rights reserved.
      </p>
    </div>
    <div className="tr">
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
        font-size: 12px;
        font-weight: 300;
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
