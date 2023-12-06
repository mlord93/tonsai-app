import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  font-size: 1.5;
  z-index: 2;
  background: var(--red-rock);
  position: fixed;
  width: 100%;
  .bar {
    height: var(--header-height);
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: var(--bs);
  }
  .logo {
    text-decoration: none;
    font-family: var(--logo-font);
    font-size: xx-large;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <div className="logo">
          <Link href="/">Tonsai Wear</Link>
        </div>
      </div>
    </HeaderStyles>
  );
}
