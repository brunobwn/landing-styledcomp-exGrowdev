import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);

  a {
    transition: transform 200ms;
  }

  a:hover {
    transform: scale(1.05);
  }

  .linkContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    nav {
      color: var(--primary);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 1.2rem;
    }

    p {
      color: var(--text-color);
      filter: opacity(0.8);
    }
  }

  .iconContainer {
    display: flex;
    gap: 2rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    flex-direction: column;
    gap: 2rem;

    .iconContainer {
      order: -1;
    }

    .linkContainer {
      nav {
        align-items: center;
        justify-content: center;
        order: 5;
      }
      nav span {
        display: none;
      }

      p {
        order: 10;
        text-align: center;
      }
    }
  }
`;
