import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Image from 'next/image';
import blogItems from '/content/blogItems';
import aboutUs from '/content/aboutUs';

const IndexStyles = styled.div`
  .hero-container{
    position: relative;
    width: 100vw;
  }
  .hero-image {
    height: calc(100vh - var(--header-height));
    width: 100vw;
    object-fit: cover;
    margin-top: var(--header-height);
  }
  .tag-line {
    position: absolute;
    top: 75%; /* Center vertically */
    left: 75%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Center both horizontally and vertically */
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
  }
  .blog-post {
    width: 30vh;
    margin-left: 1vw;
    position: relative;
  }
  .blog-text {
    line-height: 1;
    position: absolute;
    text-align: center;
    top: 5%; 
    left: 50%; 
    transform: translate(-50%, -50%);
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
    width: 100vw;
    display:flex;
    align-items: center;
    flex-direction: column;
  }
  .about-us-title{
    font-style: italic;
  }
  .about-us-background-dark {
    background-color: var(--dark-dusk);
    color: white;
    padding: 150px 0px 150px 0px;
  }
  .about-us-text {
    width: 60%;
    text-align:center;
    padding: 20px 0px 40px 0px;
  }
`;

export default function IndexPage() {
  return (
    <IndexStyles aboutUsHeight={0}>
      <div className="hero-container">
        {<img
          className="hero-image"
          src="/static/climber.jpg"
          alt="Climbing at Red Rocks"
        />}
        <div className="tag-line">Built for<br />Climbers</div>
      </div>
      <div className="page-spacing">
        {aboutUs.map((section, i) => (
          <div key={i} className={i % 2 == 0 ? "about-us about-us-background-dark" : "about-us"}>
            <h1 className="about-us-title" > {section.label}</h1>
            <div className="about-us-text">{section.content}</div>
          </div>
        ))
        }
        <Carousel title="Tonsai Blog">
          {blogItems.map((post, i) => (
            <div className="blog-post" key={i}>
              <h3 className="blog-text">{post.title}</h3>
              <Image width="500" height="500" quality={100} className="blog-image" alt={post.altText} src={post.image} />
            </div>
          ))}
        </Carousel>
      </div >
    </IndexStyles >
  );
}
