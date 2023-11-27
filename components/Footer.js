import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;
  margin-top: var(--space-between-components);
  min-height: 100px;
  background-color: var(--dusk);
  color: white;
  font-size: medium;
  p {
    padding: 10px;
  }
  .grid {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    line-height: 1.5;
    font-family: var(--logo-font);
  }
  .email-us {
    text-decoration: underline;
  }
  .social-media {
    display: flex;
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
  }
  .fa:hover {
    background-color: var(--light-dusk);
  }
  .side-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="grid">
        <div className="side-column">
          <p>
            Contact Us
            <br />
            <a className="email-us" href="mailto:info@tonsaithreads.com">
              info@tonsaithreads.com
            </a>
          </p>
          <h1 className="logo">Tonsai Threads</h1>
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
          <div>
            <p>
              Additional Links go here
              <br />
              Additional Links go here
              <br />
            </p>
          </div>
          <div>
            <p>Tonsai Threads 2023</p>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
