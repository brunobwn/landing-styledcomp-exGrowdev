import styled from 'styled-components';

interface Props {
  background: string;
  small?: boolean;
}

const Container = styled.section<Props>`
  width: 100%;
  min-height: ${(props) => (props.small ? '35vh' : '55vh')};
  color: white;
  display: grid;
  place-items: center;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 3rem;

  h2 {
    font-size: 2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default Container;
