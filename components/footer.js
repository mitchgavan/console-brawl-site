import Logo from './logo';
import Mail from '../svgs/mail.svg';

export default () => (
  <footer>
    <div className="column-left">
      <Logo small />
    </div>
    <div>
      <p>
        &copy; Mitch Gavan 2017. All rights reserved.
      </p>
    </div>
    <div className="column-right">
      <a href="mailto:mitchgavan@gmail.com">
        <Mail width="20" height="20" fill="#fefefe" className="icon-mail" />
      </a>
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
      a {
        color: white;
        text-decoration: none;
        width: 20px;
        height: 20px;
      }
      :global(.icon-mail) {
        opacity: 1;
        transition: opacity 200ms;
      }
      :global(.icon-mail:hover) {
        opacity: 0.8;
      }
      @media (min-width: 769px) {
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
