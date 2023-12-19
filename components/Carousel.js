import styled from 'styled-components';
import propTypes from 'prop-types';
import { useRef } from 'react';

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  .carousel-container{
    position: relative;
    overflow: hidden;
  }

  .carousel-inner {
    width: 100vw;
    display: flex;
    align-items: stretch;
    overflow-x: scroll;
  }

  .title-wrapper {
    align-self: center;
    padding-bottom: 20px;
    font-size: xx-large;
    font-weight:bold;
  }

  .button-container {
    position: absolute;
    width: 100%;
    top: 50%;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  button {
    position: absolute;
    z-index: 1;
    background-color: var(--light-dusk);
    color: white;
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 40px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-weight: bold;
  }
  button:hover{
    background-color: var(--red-rock);
  }
  .button-left {
    left: 5%;
  }
  .button-right{
    right: 5%;
  }
  @media (max-width: 768px) {
      button {
        visibility: hidden;
      }
    }
  .icon-font{
    font-size: 35px;
  }
`;

export default function Carousel({ title, children }) {
  const containerRef = useRef(null);

  function handleScroll(scrollDirection) {
    const itemWidth = containerRef?.current?.children[0]?.offsetWidth;
    if (itemWidth) {
      const currentScroll = containerRef.current.scrollLeft;
      const maxScroll =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      let scrollTo = currentScroll + scrollDirection * itemWidth;
      if (scrollTo < 0 || scrollTo - itemWidth >= maxScroll) {
        scrollTo = 0;
      }
      containerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  }

  return (
    <CarouselStyles>
      <div className="title-wrapper">
        {title}
      </div>
      <div className="carousel-container">
        <div className="carousel-inner" ref={containerRef}>
          {children.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="button-left" onClick={() => handleScroll(-1)}>
            <i className="icon-font fa-solid fa-angle-left" />
          </button>
          <button className="button-right" onClick={() => handleScroll(1)}>
            <i className="icon-font fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </CarouselStyles>
  );
}

Carousel.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
