import styled from 'styled-components';

interface Props {
  ImageSide: 'left' | 'right';
}

const Container = styled.article<Props>`
  width: 100%;
  display: flex;

  .content {
    width: 50%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    gap: 0.5rem;
    color: var(--text-color);

    h4 {
      width: 100%;
      font-size: 2rem;
    }
  }

  img {
    order: ${(props) => (props.ImageSide === 'left' ? '0' : '2')};
    width: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .content {
      width: 100%;
    }

    img {
      width: 100%;
      order: 0;
    }
  }
`;

export default Container;
