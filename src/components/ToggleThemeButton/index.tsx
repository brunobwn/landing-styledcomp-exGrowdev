import styled, { ThemeContext } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';

const ButtonToggle = styled.button`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.textColor};
  color: ${(props) => props.theme.colors.background};
  display: grid;
  place-items: center;
  box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.3);
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

interface Props {
  handleToggleTheme: () => void;
}

const ToggleThemeButton: React.FC<Props> = ({ handleToggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <ButtonToggle onClick={() => handleToggleTheme()}>
      {theme.name === 'light' ? <FaMoon /> : <FaSun />}
    </ButtonToggle>
  );
};

export default ToggleThemeButton;
