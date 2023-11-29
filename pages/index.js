import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Tab from '../components/Tab';
import Carousel from '../components/Carousel';
import Box from '../components/Box';
import Image from 'next/image';
import blogItems from '/content/blogItems';
import aboutUs from '/content/aboutUs';

const IndexStyles = styled.div`
  .hero-image {
    height: calc(100vh - var(--header-height) - var(--about-us-height, 0px));
    width: 100vw;
    object-fit: cover;
    margin-top: var(--header-height);
  }
  .blog-post {
    width: 30vh;
    margin-left: 5vw;
  }
  .blog-text {
    line-height: 1;
    font-family: var(--logo-font);
  }
  .blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: 1/1;
  }
  .page-spacing {
    margin-top: -15px;
    display: flex;
    flex-direction: column;
    gap: var(--space-between-components);
  }
  .about-us {
    background-color: var(--dark-dusk);
    color: white;
    width: 100vw;
  }
`;

export default function IndexPage() {
  const aboutUsRef = useRef(null);
  useEffect(() => {
    const aboutUsHeight = aboutUsRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      '--about-us-height',
      `${aboutUsHeight}px`
    );
  }, []);
  return (
    <IndexStyles aboutUsHeight={0}>
      <img
        className="hero-image"
        src="/static/RedRockClimbing.png"
        alt="Climbing at Red Rocks"
      />
      <div className="page-spacing">
        <div className="about-us" ref={aboutUsRef}>
          <Tab tabs={aboutUs} />
        </div>
        <Carousel title="Tonsai Blog">
          {blogItems.map((post, i) => (
            <Box width={15} key={i}>
              <h3 className="blog-text">{post.title}</h3>
              <p className="blog-text">{post.standfirst}</p>
              <Image width="300" height="300" quality={100} className="blog-image" alt={post.altText} src={post.image} />
            </Box>
          ))}
        </Carousel>
      </div>
    </IndexStyles>
  );
}
