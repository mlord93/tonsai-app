import { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TabStyles = styled.div`
  padding-top: 15px;

  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    margin: 0px 0px 0px 0px;
    font-family: var(--logo-font);
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
  .intro-titles-container {
    display: flex;
    justify-content: space-around;
  }
  .about-text {
    margin: 20px 100px 20px 100px;
  }
  .selected-value-title {
    text-decoration: underline;
    background-color: var(--light-dusk);
    border-radius: var(--border-radius);
  }
`;

export default function Tab({ tabs }) {
  // eslint-disable-next-line new-cap
  const [selectedValue, setSelectedValue] = new useState(0);

  function generateValueTitles() {
    return tabs.map((value, index) => (
      <button
        type="button"
        className={selectedValue === index ? 'selected-value-title' : ''}
        onClick={() => setSelectedValue(index)}
        key={index}
      >
        {value.label}
      </button>
    ));
  }

  return (
    <TabStyles>
      <div className="intro-titles-container">{generateValueTitles()}</div>
      <div className="about-text">{tabs[selectedValue].content}</div>
    </TabStyles>
  );
}

Tab.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      content: propTypes.node.isRequired,
    })
  ).isRequired,
};
