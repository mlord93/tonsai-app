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
  .logo {
    position: absolute;
    top: 3%; 
    left: 50%;
    width: 8vw;
    aspect-ratio: 1/1;
    transform: translate(-50%, -50%);
  }
  .coming-soon {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    text-align: center;
    color: white;
    font-size: 8rem;
    font-weight: bold;
    font-family: var(--coming-soon-font);
    font-style:italic;
  }
  .tag-line {
    position: absolute;
    top: 75%; 
    left: 75%;
    transform: translate(-50%, -50%); 
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
  }
  .blog-post {
    width: 30vh;
    min-width: 200px;
    margin-left: 1vw;
    position: relative;
  }
  .blog-text {
    color: white;
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
  .about-us-wrapper {
    width: 100vw;
    display:flex;
    align-items: center;
    flex-direction: row;
  }
  .about-us-middle {
    width: 100vw;
    display:flex;
    align-items: center;
    flex-direction: column;
  }
  .about-us-title{
    font-style: italic;
  }
  .background-dark {
    width: 100vw;
    background-color: var(--dark-dusk);
    color: white;
    padding: 150px 0px 150px 0px;
  }
  .about-us-text {
    width: 80%;
    text-align:center;
    padding: 20px 0px 40px 0px;
  }

  .side-image{
    width: 20vw;
    padding: 0px 40px 0px 40px;
    object-fit: cover; /* Maintains the aspect ratio and covers the entire container */
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  .side-image-left{
    margin-right: -50px;
  }

  .side-image-right{
    margin-left: -50px;
  }

  .side-image-caption{
    text-align:center;
  }

`;

export default function IndexPage() {

  function renderSideImage(image, caption, side) {
    if (image) {
      return (
        <div>
          <img className={"side-image side-image-" + side} src={image} alt={caption}></img>
          <div className="side-image-caption">{caption}</div>
        </div>)
    }
  }

  return (
    <IndexStyles>
      <div className="hero-container">
        <img
          className="hero-image"
          src="/static/climber.jpg"
          alt="Climbing at Red Rocks"
        />
        <img
          className="logo"
          src="/static/Logo_white.png"
          alt="Logo Image"
        />
        <div className="coming-soon">Launching Soon</div>
      </div>

      <div className="page-spacing">

        {aboutUs.map((section, i) => (
          <div key={i} className={i % 2 == 0 ? "background-dark about-us-wrapper" : "about-us-wrapper"}>
            {renderSideImage(section.imageLeft, section.captionLeft, "left")}
            <div className="about-us-middle">
              <h1 className="about-us-title" > {section.label}</h1>
              <div className="about-us-text">{section.content}</div>
            </div>
            {renderSideImage(section.imageRight, section.captionRight, "right")}
          </div>
        ))
        }

        <Carousel title="#ConfidentComfortCute">
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
