import Mail from '../svgs/mail.svg';
import Twitter from '../svgs/twitter.svg';

const FooterIcons = () => (
  <div>
    <a href="https://twitter.com/MitchG23">
      <Twitter width="18" height="18" fill="#fefefe" className="icon icon-twitter" />
    </a>
    <a href="mailto:mitchgavan@gmail.com">
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
      :global(.icon) {
        opacity: 1;
        transition: opacity 200ms;
      }
      :global(.icon:hover) {
        opacity: 0.8;
      }
      @media screen and (min-width: 769px) {
        a {
          margin: 0 0 0 15px;
        }
      }
    `}
    </style>
  </div>
);

export default FooterIcons;
