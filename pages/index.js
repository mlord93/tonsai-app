import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Tab from '../components/Tab';
import Carousel from '../components/Carousel';
import Box from '../components/Box';
import Image from 'next/image';

const IndexStyles = styled.div`
  .hero-image {
    height: calc(100vh - var(--header-height) - var(--about-us-height, 0px));
    width: 100vw;
    object-fit: cover;
    margin-top: var(--header-height);
  }
  /* .tag-line {
    font-size: 60px;
    color: white;
    position: absolute;
    margin-left: 60vw;
    margin-top: -15vw;
    line-height: 50px;
  } */
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
    //position: relative;
  }
  .about-us {
    background-color: var(--dark-dusk);
    color: white;
    width: 100vw;
  }
`;

const values = [
  {
    label: 'Built for Strength',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    label: 'Woman Owned',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    label: 'Strong Values',
    content:
      'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const blogInfo = [
  {
    title: 'Organizing your Gear',
    standfirst: 'An effective strategy to keeping your gear neat and tidy',
    image: '/static/climber1.jpg',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Climbing Training Plan',
    standfirst: 'How to find a training plan so you can climb harder',
    image: '/static/climber2.jpg',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Climbing with kids',
    standfirst: 'Including the little ones on your day out can be fun!',
    image: '/static/climber3.png',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Cragdogs',
    standfirst: 'Keeping your best doggie friend happy on long days out',
    image: '/static/climber4.png',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Organizing your Gear',
    standfirst: 'An effective strategy to keeping your gear neat and tidy',
    image: '/static/climber1.jpg',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Climbing Training Plan',
    standfirst: 'How to find a training plan so you can climb harder',
    image: '/static/climber2.jpg',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Climbing with kids',
    standfirst: 'Including the little ones on your day out can be fun!',
    image: '/static/climber3.png',
    url: 'https://google.com',
    altText: 'sample',
  },
  {
    title: 'Cragdogs',
    standfirst: 'Keeping your best doggie friend happy on long days out',
    image: '/static/climber4.png',
    url: 'https://google.com',
    altText: 'sample',
  },
];

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
          <Tab tabs={values} />
        </div>
        <Carousel title="Tonsai Blog">
          {blogInfo.map((post, i) => (
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
