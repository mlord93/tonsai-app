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
    label: 'Built For Strength',
    content:
      `Hey ladies, we have a problem. Have you noticed that over time as you climb, you are building the upper body strength that the world told us we would never have. You start getting comments about how great your back looks (even though you can’t see it) so you check it out in the mirror. Indeed, it looks great and feels amazing. That is, until you start to realize that women’s clothing is not built for buff ladies. Especially those of us with modest chests. Especially sports bras. Bigger back muscles demand a bigger band size but the industry matches that with bigger cup sizes. So we are left buying endless ill fitting sports bras thinking we must be going crazy. If you buy a larger size to make room for your back, the cups are sagging and if you buy a smaller size to keep the cups snug then there is no room for your back muscles and forget breathing! At Tonsai, we are right there with you and we are committed to solving this problem for all of us!`,
  },
  {
    label: 'Women Owned',
    content:
      `We are Chan and Laura, friends who are united by a shared love of climbing and adventure. Like other women climbers, we found ourselves facing the same challenge – the struggle of finding a bra that fits our broad shoulders and lats. We set out on a mission to try on all the bras available in the market and realized there was't a bra specifically designed for our climber's body. Recognizing the void in the market for a solution, we decided to make it our day job to tackle this problem. Little did we know that our skill sets, one in exercise science and the other in engineering, would converge to create an innovation we never thought we'd need.`,
  },
  {
    label: 'Our Values',
    content:
      `Welcome to Tonsai, where we believe that every woman deserves to feel confident, comfortable, and cute in her own skin, especially when it comes to what she wears. At Tonsai, we're not just a brand; we're a movement that celebrates the beauty of strength. Our mission is simple yet powerful: to provide bras that are built with the uniqueness of a climber's body in mind. Join us at Tonsai, where every bra is a statement – a statement of confidence, comfort, and undeniable cuteness. Because when you feel good, you're unstoppable. 🌺💪 #TonsaiEmpowers #ConfidentComfortCute`,
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
