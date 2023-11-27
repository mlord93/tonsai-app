import styled from 'styled-components';
import propTypes from 'prop-types';

const BoxStyles = styled.div`
  background-color: hsl(0, 100%, 100%, 0.3); //rgba(255, 255, 255, 0.3);
  color: black;
  width: ${(props) => props.width}vw;
  margin-left: 5vw;
  border-radius: var(--border-radius);
  padding: 20px 80px 20px 80px;
`;

export default function Box({ children, width }) {
  return <BoxStyles width={width}>{children}</BoxStyles>;
}

Box.propTypes = {
  width: propTypes.number,
  children: propTypes.node,
};
