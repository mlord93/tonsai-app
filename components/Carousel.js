import styled from 'styled-components';
import propTypes from 'prop-types';
import { useRef } from 'react';

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .carousel-inner {
    width: 100vw;
    display: flex;
    align-items: stretch;
    overflow-x: scroll;
  }

  .title-wrapper {
    align-self: center;
    padding-bottom: 20px;
    font-size: x-large;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 5px 50px 5px 50px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-weight: bold;
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
      <div className="carousel-inner" ref={containerRef}>
        {children.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="title-wrapper">
        <button onClick={() => handleScroll(-1)}>
          <i className="fa-solid fa-arrow-left" />
        </button>
        {title}
        <button onClick={() => handleScroll(1)}>
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </CarouselStyles>
  );
}

Carousel.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
