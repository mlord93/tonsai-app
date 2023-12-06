import styled from 'styled-components';

const FooterStyles = styled.div`
  
  .tonsai-trees {
    margin-top: var(--space-between-components);
    margin-bottom: -8px;
    width: 100%;
  }
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100px;
    background-color: var(--dusk);
    color: white;
    font-size: medium;
    }
  .logo {
    font-family: var(--logo-font);
    margin-top: 0;

  }
  .email-us {
    text-decoration: underline;
  }
  .social-media {
    display: flex;
    padding-top: 10px;
  }
  .fa {
    background-color: var(--red-rock);
    border-radius: 50%;
    padding: 5px;
    margin: 5px;
    font-size: 25px;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: fontAwesome;
  }
  .fa:hover {
    background-color: var(--light-dusk);
  }
  .side-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <img
        className="tonsai-trees"
        src="/static/Tonsai_tree.png"
        alt="Trees above footer"
      />
      <div className="footer-wrapper">
        <div className="side-column">
          <div>
            Contact Us
            <br />
            <a className="email-us" href="mailto:info@tonsaithreads.com">
              info@tonsaithreads.com
            </a>
          </div>
        </div>
        <div>
          <div>
            <div className="social-media">
              <a
                href="https://facebook.com"
                aria-label="Follow on Facebook"
                className="fa fa-facebook"
              >
                {' '}
              </a>
              <a
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                className="fa fa-instagram"
              >
                {' '}
              </a>
              <a
                href="https://youtube.com"
                aria-label="Follow on Youtube"
                className="fa fa-youtube"
              >
                {' '}
              </a>
              <a
                href="https://tiktok.com"
                aria-label="Follow on Tiktok"
                className="fa fa-brands fa-tiktok"
              >
                {' '}
              </a>
              <a
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                className="fa fa-brands fa-x-twitter"
              >
                {' '}
              </a>
              <a
                href="mailto:info@tonsaithreads.com"
                aria-label="Email Us"
                className="fa fa-regular fa-envelope"
              >
                {' '}
              </a>
            </div>
          </div>
        </div>
        <div className="side-column">
          <h2 className="logo">Tonsai Wear</h2>
        </div>
      </div>
    </FooterStyles>
  );
}
