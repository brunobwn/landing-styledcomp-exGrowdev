import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem 1rem;
  gap: 1rem;
  background: var(--backgroundSecondary);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5rem;
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    text-align: center;
    gap: 1rem;
    color: var(--text-color);

    svg {
      color: var(--primary);
      width: 3rem;
      height: 3rem;
    }
  }
`;
