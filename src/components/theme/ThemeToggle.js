import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? 'Symbiote' : 'Classic'} Suit
    </Button>
  );
};

export default ThemeToggle;
