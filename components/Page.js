import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
    html {
        --light-sand: #FFF1E0;
        --sand: #f2ac6b;
        --red-rock: #e98249;
        --gray: #9c8c71;
        --grey: var(--gray);
        --light-dusk: #4698ad;
        --dusk: #125060;
        --dark-dusk: #0A313B;
        --deep-cyan: #216567;
        --maxWidth:1000px;
        --bs: 0 1px 5px 0 gray;
        --header-height: 50px;
        --border-radius: 10px;
        --space-between-components: 100px;
        --logo-font: 'DM Serif Display', serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    *, *::before, *.after {
        box-sizing: inherit;
    }
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--light-sand);
        background-image: url("/static/Tonsai_mtn.png");
        background-attachment: fixed;
        background-size: cover;
        position: relative;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-size: 1.1rem;
        line-height: 1.5;
    }
    a {
        text-decoration: none;
        color: white;
    }
    a.hover {
        text-decoration: underline;
    }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  //margin: 0 auto;
`;

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};
